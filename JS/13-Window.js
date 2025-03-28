var prozor;

function otvori(){
    prozor = window.open("reklamni-prozor.html","_blank","width=400, height=250, left=300, top=500");
    // setTimeout("zatvori()",3000);
    // Pisemo nesto teksta u novom prozor
    prozor.document.write("<p>Ovo je bio reklmani prozor</p>")
    prozor.opener.document.write("<p> Ovo je Opener </p>")
};
function zatvori(){
    prozor.close();
};
function unesiVrednost(){
    var unetaVrednost = prompt("Unesite vrednost", "Default text");
    alert("Uneta vrednost je: " + unetaVrednost);
};
function stampaj(){
    window.print();
};
function promeniVelicinu(){
    prozor.resizeTo(150,150);
    prozor.focus();
};
function status(){
    var x = confirm("Da li ste sigurni da zelite da napustite ovu stranu?");
    if(x){
        window.close();
    }
};
function velicinaEkrana(){
    var u_s = window.innerWidth;
    var u_v = window.innerHeight;
    var s_s = window.outerWidth;
    var s_v = window.outerHeight;

    //ECMA Script 6 (ES6) - backtick ' - `

    alert(`Sirina unut ekrana je ${u_s} a visina unut ekrana je ${u_v}. Sirina spoljnjeg ekrana je ${s_s} a visina spoljasnjeg ekrana je ${s_v}`);
};

var mojProzor;

function otvoriProzor(){
    mojProzor = window.open("","","width=400, height=200");
};

function zatvoriProzor(){
    if(mojProzor){
        mojProzor.close();
    }
}

function proveri(){
    if(!mojProzor){
        alert("Moj prozor nikada nije bio otvoren");
    }else if(mojProzor.closed){
        alert("Moj prozor je zatvoren");
    }else{
        alert("Moj prozor je otvoren");
    }
}