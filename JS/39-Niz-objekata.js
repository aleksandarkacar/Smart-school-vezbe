function primer1(){
    var txt = "";

hoteli.forEach(hotel => {
    txt += `<strong>Podaci o hotelu:</strong>`;
    txt += `<p>Naziv: ${hotel.naziv}</p>`
    txt += `<p>adresa: ${hotel.adresa}</p>`
    txt += `<p>Kapacitet: ${hotel.brojSoba}</p>`
    // txt += `<p>Teretana: ${hotel.teretana}</p>`
    txt += `<p>Broj Slobodnih Soba: ${hotel.brojSlobodnihSoba()}</p>`
    txt += `<p>Teretana: ${hotel.teretana ? 'Da' : 'Ne'}</p>`
    // if (hotel.teretana) {
    //     txt += `<p>Teretana: Da</p>`
    // } else {
    //     txt += `<p>Teretana: Ne</p>`
    // }
});
document.getElementById("hoteli").innerHTML = txt;
}

var hoteli = [
    {
    naziv: "Hotel Park",
    adresa: "Novosadskog sajma 35",
    brojSoba: 140,
    rezervisano: 57,
    teretana: true,
    brojSlobodnihSoba: function(){
        return this.brojSoba - this.rezervisano;
    }
},

    {naziv: "Hotel Park",
    adresa: "Novosadskog sajma 35",
    brojSoba: 140,
    rezervisano: 57,
    teretana: true,
    brojSlobodnihSoba: function(){
        return this.brojSoba - this.rezervisano;
    }
}
];

