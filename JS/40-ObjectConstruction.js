function Osoba(ime, prezime, godine, bojaOciju, drzava){
    this.ime = ime;
    this.prezime = prezime;
    this.godine = godine;
    this.bojaOciju = bojaOciju || "crne";
    this.drzava = drzava || "Srbija";
}

let osoba1 = new Osoba("Marko", "Markovic", 40, "plave");
let osoba2 = new Osoba("Darko", "Darkovic", 33, "zelene");

osoba1.grad = "NoviSad";

osoba2.punoIme = function(){
    return(`${this.ime} ${this.prezime}`);
}

console.log(osoba2.punoIme());