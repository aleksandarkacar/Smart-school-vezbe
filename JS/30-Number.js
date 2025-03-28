function isNaNFunc(){
    var rez = "";

    
    //isto sto i 
    //rez += isNaN + ": 123<br>"
    
    rez = rez + isNaN(123) + ": 123<br>";
    rez+= isNaN(-1.23) + ": -1.23<br>";
    rez+= isNaN(5-2) + ": 5-2<br>";
    rez+= isNaN("100") + ": '100'<br>";
    rez+= isNaN("Hello") + ": 'Hello'<br>";
    rez+= isNaN(true) + ": true<br>";
    rez+= isNaN(undefined) + ": undefined<br>";
    rez+= isNaN(NaN) + ": NaN<br>";
    rez+= isNaN("NaN") + ": 'NaN'<br>";
    rez+= isNaN("true") + ": 'true'<br>";

    document.getElementById("NaNDemo").innerHTML = rez;
}

function toFixedFunc(){
    var x = 9.756;
    document.getElementById("toFixedDemo").innerHTML = 
    x.toFixed(0) + "<br>" +
    x.toFixed(2) + "<br>" +
    x.toFixed(4) + "<br>" +
    x.toFixed(6);
}

function toPrecisionFunc(){
    var x = 9.756;
    document.getElementById("toPrecisionFunc").innerHTML = 
    x.toPrecision() + "<br>" +
    x.toPrecision(2) + "<br>" +
    x.toPrecision(4) + "<br>" +
    x.toPrecision(6);
}