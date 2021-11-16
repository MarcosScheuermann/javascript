    // //ejercicio practico seccion de comentarios

    // let form = document.getElementById("comments-form");
    // function addComents(event){ //agregar comerntario
    //     event.preventDefault(); //que no suceda el evento por defecto
    
    //     console.log(event);
    
    //     let comment = document.querySelector("#coment-form").value; //gutoma el valor del elemto con el value
    //     let removebutton = document.createElement("button");
    //     removebutton.innerText = "x";
    //     removebutton.classList.add("btn","btn-danger")
    //     removebutton.setAttribute("onclick","removeComment(event)")


    //     let commentBlock = document.createElement("li");
    //     commentBlock.innerText = comment;
    //     let commentList = document.querySelector("#coments-list"); //llamo al padre
    //     commentBlock.appendChild(removebutton)
    
    //     commentList.appendChild(commentBlock); //pido que lo adpte
    
    //     form.reset();
    // }
    // function removeComment(event){
    //     event.target.parentElement.remove();
    // }

//mascota cuadrada
let x = 0;
let y = 0;
let mascota = document.querySelector("#mascota");
let corral = document.querySelector("#corral");

function moverMascota(event){
    event.preventDefault();
    console.log(event.Code);
    let corralLimite = corral.getBoundingClientRect();
    let mascotaLimite = mascota.getBoundingClientRect();

    switch (event.keyCode) {
        case 37:
            if(mascotaLimite.left > corralLimite.left){
                x--
            }
            break;
        case 38:
            if (mascotaLimite.top > corralLimite.top){
                y--
            }
            break;
            case 39:
            if (mascotaLimite.right < corralLimite.right){
                x++
            }
                break;
            case 40:
            if (mascotaLimite.bottom < corralLimite.bottom){
                y++
            }
                break;    
           }
    mascota.style.transform = `translate(${x*10}px, ${y*10}px)`
} 

document.addEventListener("keydown", moverMascota);