var url = "https://jsonplaceholder.typicode.com/todos/";

$(document).ready( () => {
    getTodos();
})

function getTodos() {
        let text = "";
      $.getJSON(url, (data) => {
        data.forEach(element => {
            text += `<div class="${element.completed ? "success" : "danger"}">
            <p> User number: ${element.userId} </p>
            <p> Title: ${element.title} </p>
            <p> Completed: ${element.completed ? "yes" : "no"} <p>
            </div> <br><br>` 
        });
        $("#todos").html(text);
      });
}

$("#loadTodos").click(() => {
    getTodos();
});


$("#loadTodo3").click(() => {
    $.getJSON(url, (data)=>{
        let text = ""
        data.forEach(element => {
            if(element.userId === 3){
                text += `<div class="${element.completed ? "success" : "danger"}">
                <p> User number: ${element.userId} </p>
                <p> Title: ${element.title} </p>
                <p> Completed: ${element.completed ? "yes" : "no"} <p>
                </div> <br><br>` 
            }
            $("#todos").html(text);
        })
    });
})