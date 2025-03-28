$(document).ready(() => {
    var prviBroj = $("#prvi");
    var drugiBroj = $("#drugi");
    var treciBroj = $("#treci");
    var rezulatat = $("#rez");
    var kredit = parseInt(prompt("Kolko kredita uplacijete?", 200));
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
        rand1 = Math.ceil(Math.random() * 10) - 1;
        rand2 = Math.ceil(Math.random() * 10) - 1;
        rand3 = Math.ceil(Math.random() * 10) - 1;
        // console.log(rand1,rand2,rand3);
        prviBroj.html(rand1);
        drugiBroj.html(rand2);
        treciBroj.html(rand3);
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

