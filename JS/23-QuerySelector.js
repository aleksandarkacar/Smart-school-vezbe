function prikaziUDrugiDiv(){
    var tekstZaPrikaz = document.querySelector(".prvi");
    // alert(tekstZaPrikaz.innerHTML)
    // alert(tekstZaPrikaz.getAttribute("class"));

    if(tekstZaPrikaz.getAttribute("class")=== "prvi"){
        document.querySelectorAll(".drugi")[0].innerHTML = tekstZaPrikaz.innerHTML;
    };

    tekstZaPrikaz.setAttribute("style","color: red");
    tekstZaPrikaz.setAttribute("title","Naslov elementa");

    // tekstZaPrikaz.removeAttribute("class");

    //Uklanjanje elementa
    // tekstZaPrikaz.remove();

    //Kreiranje elementa

    var novoDugme = document.createElement("input");
    document.body.appendChild(novoDugme);
    novoDugme.setAttribute("type","button");
    novoDugme.setAttribute("value","bjelo dugme");
    novoDugme.setAttribute("onclick", "prikaziUDrugiDiv()")

    // prikaziUDrugiDiv();
};