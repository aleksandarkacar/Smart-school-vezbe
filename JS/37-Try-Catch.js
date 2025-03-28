function primer1(){
    try{
        alert("Usao sam u try block");
        var a = 2 + 2;
        alert("Sabrnani broj je" + a);
        alert("Kraj try bloka");
    } catch(err) {
        alert("Catch blok je ignorisan, zato stu u try bloku nije bilo gresaka");
    }
}