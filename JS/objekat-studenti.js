function Student(ime, prezime, broj_idneksa, ocene, godina_studija){
    this.ime = ime;
    this.prezime = prezime;
    this.broj_idneksa = broj_idneksa;
    this.ocene = ocene || []; 
    this.godina_studija = godina_studija;

    this.studentInfo = function(){
        return(`${this.ime} ${this.prezime} - ${this.broj_idneksa}`)
    }

    this.prosekOcena = function(){
        let zbirOcena = 0;
        ocene.forEach(ocena => {
            zbirOcena += ocena;
        });
        // console.log (zbirOcena + " / " + this.ocene.length);
        return (zbirOcena / (this.ocene.length));
    };

    this.godinaUpisa = function(){
        datum = new Date;
        console.log(datum.getFullYear());
        return (datum.getFullYear()- this.godina_studija)
    };
}

let student1 = new Student("Petar", "Petarovic", "1123", [9, 9, 8, 6, 6, 6, 10, 5, 8, 7],4);

console.log(student1.studentInfo());
console.log(student1.prosekOcena());
console.log(student1.godinaUpisa());

let student2 = new Student("Mile", "Miletic", "1234", [10, 9], 5);

console.log(student2.studentInfo());
console.log(student2.prosekOcena());
console.log(student2.godinaUpisa());

