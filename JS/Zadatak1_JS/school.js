// var ime_polaznika = "Petar";
// var prezime_polaznika = "Petrovic";
// var godine = 25;
// var novi_kurs = "Front End Programiranje";
// var placanje_na_rate = true;
// var prethodni_kursevi = ["Java", "Python", "C#"];


function get_input_value(id){
    var text = document.getElementById(id).value;

    return(text);
}

function get_checkbox_value(id){

    if(document.getElementById(id).checked){
        return("Da")        
    }
    else{
        return("Ne")
    }


    // var text = document.getElementById(id).checked;
    // return(text);
}

function get_selected_value(id){
    var e = document.getElementById(id);
    var text = e.options[e.selectedIndex].value;
    // alert(text);
    return(text);
}

function poruka_alert(ime_polaznika,prezime_polaznika,godine,novi_kurs,placanje_na_rate,prethodni_kursevi) {

    var Poruka = "Polaznik " + ime_polaznika + " " + prezime_polaznika + " ima " + godine + " godina, prijavljuje se na kurs " + novi_kurs + ". Placanje se vrsi na rate: " + placanje_na_rate + ". Kursevi koje je prethodno pohadjao su: " + prethodni_kursevi + "." ;
    // Omiljeni prethodni kurs mu je " + prethodni_kursevi

    alert(Poruka);
}

// poruka_alert(ime_polaznika,prezime_polaznika,godine,novi_kurs,placanje_na_rate,prethodni_kursevi);