$(document).ready(function () {
    $("body").css( "background-color", "burlywood" ).css("font-family", "Tahoma");

    $("form").addClass("stilForme");

    $("#sakrij").click(() => {
        $("#kontakt").hide(1500);
    })

    $("#slika").prepend("<img src='ns.jpg'>");

    $("#prikazi").click(() => {
        $("#kontakt").toggle(1500);
    })

  });