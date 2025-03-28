function danas(){
    var danas = new Date;
    var vreme = danas.getTime();
    var dan = danas.getDay();
    var danUMesecu = danas.getDate();
    var mesec = danas.getMonth() + 1;
    var godina = danas.getFullYear();

    if(dan == 5){
        dan = "Petak";
    }


    var sati = danas.getHours();
    var minuti = danas.getMinutes();
    var sekundi = danas.getSeconds();

if(sati < 10){
    sati = "0" + sati;
}

if(minuti < 10){
    minuti = "0" + minuti;
}

if(sekundi < 10){
    sekundi = "0" + sekundi;
}

var danasnjiDatum = `${danUMesecu}-${mesec}-${godina}`;

var satnica = `${sati}:${minuti}:${sekundi}`;

document.getElementById("datum").innerHTML = satnica;
console.log(`Dan u nedelji je ${dan}, ${vreme}`)


}

setInterval(danas,1000);