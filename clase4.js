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

// let x = Number(prompt("Valor uno"));
// let y = Number(prompt("valor dos"));
// let operacion = prompt("ingrese operacion");

// if (isNaN(x)) {
//     console.log("no es un numero");
//     x = 0;
// }
// if (isNaN(y)) {
//     console.log("no es un numero");
//     y = 0;
// }
// switch (operacion) {
//     case "suma":
//         console.log(x+y);
//         break;
//     case "resta":
//         console.log(x-y);

//     default:
//         alert("operacion no contemplada");
//     break;
// }

// CLASE 5

// let nombre;
// let esRey = false;
// while(nombre !== "Arturo" || esRey !==true){
// nombre = prompt("cual es su nombre?");
// if (nombre ==="Arturo") {
//     esRey=confirm("Sos Rey?");
//     if(esRey === true){;
//     alert("sacaste el promt");
//     }else{
//         alert("NO sos rey");
//     }
// }else{
//     alert("segui participando");
// }
// }

//CLASE 6 - JS

// function suma (a,b) {
//     console.log(a + b);
//         return suma;
// }

// function hello(nombre) {
//     alert('hola '+nombre);
// }
// function ingreso(funcion) {
//     let nombre = prompt('ingrese su nombre');
//     funcion(nombre);
// }
// ingreso (hello);

//ejercicio de arrays - Calculadora

// let num1 = Number(prompt('ingrese un numero'));
// let op = prompt('ingrese operacion');
// let num2 = Number(prompt('Ingrese otro numero'));

// function calculadora(num1,num2,op) {
//     if(isNaN(num1) || isNaN(num2)){
//         return 'ingresa un numero valido'
//     }
//     switch (op) {
//         case '+':
//         return num1+num2;
//         case '-':
//             return num1-num2;
//         case 'x':
//         return num1*num2;
//         case '/':
//             return num1/num2;
        
//         default:
//             return 'Operacion no valida';
//     }
// }
// console.log(calculadora(num1,num2,op));

// jercicio P P T

// const opciones = ['piedra';'papel','tijera'];

// function bot(){
//   let jugada = Math.round(Math.random()*2);
//   return jugada;
// }
// function player(params) {
//     let jugada = prompt('ingrese piedra, papel o tijera');
//     jugada=opciones.indexOf(jugada);
//     return jugada
// }
// function definicion(bot,player) {
//     switch (true) {
//         case bot===player:
//             console.log('empate');
//         break;
//         case bot===0 && player===1:
//             console.log('gano player');
//             break;
//         case bot===0 && player===2:
//             console.log('Gano el bot');
//             break;
//         case bot===1 && player===0:
//             console.log('Gano el bot');
//         default:
//             break;
//     }
// }

