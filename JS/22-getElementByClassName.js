function prikaziUDrugiDiv(){
    // alert(document.getElementsByClassName("prvi"));
    document.getElementsByClassName("drugi")[0].innerHTML = document.getElementsByClassName("prvi")[0].innerHTML;
    document.getElementsByClassName("drugi")[1].style.display = "none";
};