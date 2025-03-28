var url = "https://jsonplaceholder.typicode.com/posts/";

$(document).ready( () => {
    getPosts();
})

function getPosts() {
        let text = "";
      $.getJSON(url, (data) => {
        data.forEach(element => {
            text += composePost(element);
        });
        $("#posts").html(text);
      });
}

function composePost(post){
    //Accepts a post and returns it as a div
    return (`<div class="post">
        <p> User number: ${post.userId} </p>
        <p> Title: ${post.title} </p>
        <p> Body: ${post.body} </p>
        </div> <br><br>` )
}

$("#loadPosts").click(() => {
    getPosts();
});


$("#loadPost3").click(() => {
    console.log("click")
    $.getJSON(url, (data)=>{
        let text = ""
        data.forEach(element => {
            if(element.userId === 3){
                text += composePost(element);
            }
            $("#posts").html(text);
        })
    });
})