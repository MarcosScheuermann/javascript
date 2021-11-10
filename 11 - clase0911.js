//ejercicio practico seccion de comentarios

let form=document.getElementById("comments-form")
function addComents(event){
    event.preventDefault();
    console.log(event);
    let comment = document.querySelector("#coment-form").value;
    let commentBlock = document.createElement("li");
    commentBlock.innerText = comment;
    let commentList = document.querySelector("#coments-list");
    commentList.appendChild(commentBlock);
    form.reset();
}