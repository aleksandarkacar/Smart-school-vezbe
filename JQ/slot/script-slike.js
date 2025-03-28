$(document).ready(() => {
    var prviBroj = $("#prvi img");
    var drugiBroj = $("#drugi img");
    var treciBroj = $("#treci img");
    var rezulatat = $("#rez");
    var kredit = parseInt(prompt("Kolko kredita uplacijete?", 200));
    var vockice = ["img/banana.png",
                    "img/dinja.png",
                    "img/jabuka.png",
                    "img/jackpot.png",
                    "img/jagode.png",
                    "img/kruska.png",
                    "img/kupine.png",
                    "img/limun.png",
                    "img/lubenica.png",
                    "img/maline.png",
                    "img/nar.png",
                    "img/narandze.png",
                    "img/sljiva.png"]
    // console.log(prviBroj, drugiBroj, treciBroj, kredit);
    function updateKredit() {
        $("#kredit b").html(kredit);
        if (kredit <= 0) {
            $("#rez").html("KRAJ IGRE");
            $("#spin").attr("disabled","true");
            $("#nova").removeAttr("disabled","false");
        }
    }

    updateKredit();
    
    var rand1, rand2, rand3;
    
    function generateRandom(){
        rand1 = Math.floor(Math.random() * vockice.length);
        rand2 = Math.floor(Math.random() * vockice.length);
        rand3 = Math.floor(Math.random() * vockice.length);
        // console.log(rand1,rand2,rand3);
        prviBroj.attr("src",vockice[rand1]);
        drugiBroj.attr("src",vockice[rand2]);
        treciBroj.attr("src",vockice[rand3]);
        Math.round
        
    } 
    
    $('#spin').click(() => {

        rezulatat.html("")
        var interval = setInterval(generateRandom, 100);
        

        setTimeout(() => {


                
                if(rand1 === rand2 && rand2 === rand3){
                    rezulatat.html("Jackpot! Osvojili ste 150 evra!");
                    kredit += 5000;
                    updateKredit();
                } else if((rand1 === rand2 && rand2 != rand3) ||
                (rand2 === rand3 && rand1 != rand3) ||
                (rand1 === rand3 && rand1 != rand2)){
                    rezulatat.html("Bravo! Osvojili ste 50 evra!");
                    kredit += 50;
                    updateKredit();
                } else {
                    rezulatat.html("izgubili ste 100 eura");
                    kredit -= 100;
                    updateKredit();
                }
                
                clearInterval(interval);
            },2000);

    })

    $("#nova").click(() => {
        location.reload();
    });




























});

