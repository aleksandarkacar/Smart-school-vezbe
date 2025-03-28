var userChoice = prompt("Da li biras kamen, papir ili makaze?");
userChoice = userChoice.toLowerCase();
console.log(userChoice);
// console.log("userChoice is: " + userChoice);

var computerChoice = Math.random();
// console.log("ComputerChoice is initialy: " + computerChoice);


if (computerChoice < 0.333333) {
    computerChoice = "kamen";
} else if (computerChoice <= 0.66666) {
    computerChoice = "papir";
} else {
    computerChoice = "makaze";
}

// console.log("ComputerChoice has turned into: " + computerChoice);

function compare(choice1, choice2){
    if (choice1 === choice2){
        return "Rezultat je neresen!";
    };

    if (choice1 === "kamen" || choice1 === "papir" || choice1 === "makaze"){

        if((choice1 === "kamen" && choice2 === "makaze") || (choice1 === "makaze" && choice2 === "papir") || (choice1 === "papir" && choice2 === "kamen")){
            return `Pobeda!!! Igrac: ${choice1} > Racunar: ${choice2}`;
        } else {
            return `Poraz! Igrac: ${choice1} < Racunar: ${choice2}` 
        }
    }
    return `Greska: korisnik nije uneo kamen papir ili makaze`;
}

alert(compare(userChoice,computerChoice));