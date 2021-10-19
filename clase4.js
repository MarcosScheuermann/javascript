// alert("HOLA");

//Clase 4 - JavaScript
// ejercicio de repaso

// const x = Number (prompt ("ingrese un numero"));
// const y = Number (prompt ("ingrese otro numero"));

// if (x>y) {
//     console.log(x+y);
// }else if (x<y) {
//     console.log(y-x);
// }else{
//     console.log(x*y);
// }

//ejercicio edad

// const edad = Number(prompt("Que edad tenes?"));

// switch (true) {
//     case edad>0 && edad<10:
//         alert("ELEGANTE");   
//         break;
//     case edad>=10 && edad<20:
//         alert("los wachiturros");
//         break;
//     case edad>=20 && edad<30:
//         alert("Black eyes peas");
//         break;
//     default:
//         alert("los 60 y 80 son lo mejor");
//         break;
// }

//ejercicio dia

// const dia = new Date().getDate();
// // 1 lunes
// //2 martes
// // ...

// switch (dia) {
//     case 1:
//         console.log("Hoy es lunes");
//     break;
//     case 2:
//         console.log("Hoy es martes");
//         break;
//     case 3:
//         console.log("Hoy es miercoles");
//         break;
//     case 4:
//         console.log("Hoy es jueves");
//         break;
//     case 5:
//         console.log("Hoy es viernes");
//         break;
//     case 6:
//         console.log("Hoy es sabado");
//         break;
//     case 7:
//         console.log("Hoy es domingo");
//         break;
//     default:
//         break;
// }

// Iterativas - WHILE

// const numero = prompt ("ingrese un numero");
// let contador = 0;
// while (contador<numero) {
//     console.log(contador);
//     contador++;
// }

// let respuesta = "porque sale de noche";
// let acierto = false;

// while (acierto===false) {
//     let propuesta = prompt("porque la luna es mayor que el sol?");
//     if (propuesta===respuesta) {
//         acierto=true;
//     }else{
//         alert("segui participando");
//     }
// }
// alert("Acertaste");

//DO_WHILE
// let numero
// do{
//      numero = Number (prompt("ingrese un numero"));

// }while (isNaN(numero)===true)

//FOR

// const numero = prompt("ingrese un numero");

// for (let contador =
//      0; contador <
//      array.length; contador++
//     ) {
//     const element = array[contador];
//     console.log(contador);
    
// }

// ejercicio con waka

let x = Number(prompt("Valor uno"));
let y = Number(prompt("valor dos"));
let operacion = prompt("ingrese operacion");

if (isNaN(x)) {
    console.log("no es un numero");
    x = 0;
}
if (isNaN(y)) {
    console.log("no es un numero");
    y = 0;
}
switch (operacion) {
    case "suma":
        console.log(x+y);
        break;
    case "resta":
        console.log(x-y);

    default:
        alert("operacion no contemplada");
    break;
}


