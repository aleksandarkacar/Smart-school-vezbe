var automobil = {
    marka: "Volvo",
    model: "V8",
    upaljen: false,
    snaga: 500,
    boja: "red",
    upali: function(){
        this.upaljen = true;
    },
    ugasi: function(){
        this.upaljen = false;
    },
    prefarbaj: function(novaBoja){
        this.boja = novaBoja
    }
}
function prikazi(){
    // console.log(automobil);
    var prikaz = document.getElementById("automobil");
    prikaz.innerHTML = `
    <strong>Automobil</strong><br>
    Marka: ${automobil.marka}<br>
    Model: ${automobil.model}<br>
    Upaljen: ${automobil.upaljen ? 'Da' : 'Ne'}<br>
    Snaga: ${automobil.snaga} HP<br>
    Boja: ${automobil.boja}
`;
}