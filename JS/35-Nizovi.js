// var nizZaSabrati = [10, 42, 50, 15, 18];
// var zbir = 0;

// nizZaSabrati.forEach(broj => {
//     zbir += broj;
// });

// console.log("Zbir je" + zbir);


function akronimFunc(str){
    var splitted = str.split(" ");
    var akronim = "";
    splitted.forEach(rec => {
        akronim += rec[0];
    });
    console.log(akronim);
}

akronimFunc("random access memory");