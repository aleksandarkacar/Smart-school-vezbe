function primer1(){

}

var hotel = {
    //kljuc : vrednost
    naziv: "Hotel Park",
    adresa: "Novosadskog sajma 35",
    brojSoba: 140,
    rezervisano: 57,
    teretana: true,
    brojSlobodnihSoba: function(){
        return this.brojSoba - this.rezervisano;
    }
}