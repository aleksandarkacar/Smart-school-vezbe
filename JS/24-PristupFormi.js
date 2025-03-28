function prikazi(){
    var vrednost = document.mojaForma.imePolaznika.value; //value se koristi samo kod elemenata forme
    // alert(vrednost);

    //isto sto i 
    var vrednost = document.getElementsByTagName(`input`)[0].value;
    // alert(vrednost);

    var x = navigator.userAgent;
    // alert(x);

    // location.reload();
    location.assign("https://www.google.com/")
}