

function prikaziIOfarbaj(){
    var tekstZaPrikaz = document.getElementsByTagName("p");
    document.getElementsByTagName("p")[1].style.color = "red";
    alert(tekstZaPrikaz[1].innerHTML);
}