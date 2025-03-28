function posaljiAnketu(){
    var checkboxses = document.getElementsByName("checkbox");
    // console.log(checkboxses);
    var selection = document.getElementById("select_id").value;
    // console.log(selection);
    var radios = document.getElementsByName("radio");
    // console.log(radios);


    var checkedArr = [];
    checkboxses.forEach(checkbox => {
        if (checkbox.checked){
            checkedArr.push(checkbox.value);
        }
    });
    
    var checkedRadio = "";
    radios.forEach(radio => {
        if (radio.checked){
            checkedRadio = radio.value;
        }
    });

console.log(`Prvo Pitanje:  ${checkedArr}
Drugo Pitanje: ${selection}
Trece Pitanje: ${checkedRadio}`)













}