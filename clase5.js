// const opciones = ['piedra', 'papel', 'tijera'];

// function bot() {
//     let jugada = Math.round(Math.random() * 2);
//     return jugada;
// }
// function jugar(player) {
//     definicion(bot(), player)
// }
// // function player(params) {
// //     let jugada = prompt('ingrese piedra, papel o tijera');
// //     jugada = opciones.indexOf(jugada);
// //     return jugada
// // }
// function definicion(bot, player) {
//     console.log(`el bot a elegido:${opciones[bot]}`);
//     switch (true) {
//         case bot===player:
//             console.log('empate');
//             break;
//         case bot===0 && player===1:
//             console.log('gano player');
//             break;
//         case bot===0 && player===2:
//             console.log('Gano el bot');
//             break;
//         case bot===1 && player === 0:
//             console.log('Gano el bot');
//         default:
//             break;
        
//     }
// }


// 
// var x = 3;

// switch (x) {
//     case 1:
//         document.write(x);
//         break;
//     case 2:
//         document.write(x + 2);
//         break;
//     default:
//         document.write(x + 5);
// }
// console.log(x);

// var result = 20;
// result = result * 5;

// function calcular_ventas(unidades_a, unidades_b, unidades_c) {
//     return unidades_a * 79 + unidades_b * 129 + unidades_c * 699;
// }

// //CARRITO DE COMPRAS

// let carrito = [];

// function buscar(carrito, valor, pos) {
//     var results = carrito.filter(function(carrito){ 
//         return carrito[pos].startsWith(valor); });
//         var firstObj = (results.length > 0) ? results[0] : null;
//     return results;
// }

// function agregarProductos(){
//     let producto = prompt("ingrese un producto");
//     carrito.push(producto.toLocaleLowerCase().trim());
//     console.log(carrito);
// }

// function mostrarCarrito() {
//     if(carrito.length===0){
//         alert('Todavia no agregaste producto');
//     }else{
//         alert(`los productos de tu carrito: \n ${carrito.join('\n')}`);
//     }    
// }

// function buscarProducto() {
//     let productos = prompt('que producto desea saber si esta en el carrito');
//     if (carrito.includes(productos.toLocaleLowerCase().trim())===true){
//         alert('El producto esta en tu carrito')
//         console.log(productos);
//     }else{
//         alert('El producto no esta en tu carrito')
//     }
// }

// function filtrarProducto() {
//     let palabraAFiltrar = prompt("Porque palabra queres filtrar tu carrito");
//     let productosFiltrados = carrito.filter(producto => producto.includes(palabraAFiltrar.toLocaleLowerCase().trim()));
//     if (productosFiltrados.length===0) {
//         alert("El producto que desea borrar no esta en su carrito")
//     }else{
//          alert(`los productos que contienen la palabra especificada son:\n- ${productosFiltrados.join("\n-")}`)
//     }
//     }


// function eliminarProducto() {
//     let productoAEliminar = prompt("ingrese el producto a eliminar");
//     let posicion = carrito.indexOf(productoAEliminar.toLocaleLowerCase().trim());
    
    
//     if (posicion===-1) {
        
//         alert("el productos que desea borrar no esta en su carrito")
//     } else {
//         carrito.splice(posicion, 1);
//         // results = productoAEliminar.filter(function(productoAEliminar) {
//         //     return productoAEliminar[pos].toUpperCase().startsWith(valor.toUpperCase());
//         // })
//         alert("el producto se borro correctamente")
//     }
    // if (form.posicion.value.toUpperCase() == carrito) {
    //     form.productoAEliminar.disabled = false;
    // }
    
    
        
        
}




//muyuscula o minuscula

// function buscar(carrito, valor, pos) {
//     var results = carrito.filter(function (carrito) {return carrito[pos].startsWith(valor); });
//     var firstObj = (results.length > 0) ? results[0] : null;
//     return results;
// }

// results = mi_array.filter(function (mi_array) { 
//     return mi_array[pos].toUpperCase().startsWith(valor.toUpperCase()); 
// })

// let alumno = {
//     nombre: "Marcos",
//     apellido: "Scheuermann",
//     edad: 35,
//     hobbies: ["futbol","programacion"],

// }

// console.log(``);

// // ejercicio de persona

// let persona = {
//     nombre:"diego",
//     edad: 35,
//     dni: 31842711,
//     domicilio:"Don bosco",
//     hijos: 0,
//     profesion: ["ingenioro","estudiante",],

//     saludar: function () {
//         alert("buenas noches mi nombre es " + this.nombre)
//     },
//     listar: function() {
//         alert(`me llamo ${this.nombre}, tengo ${this.edad} años`),
//     }

// }
// persona.saludar();//con esto lo llamo a la funcion

//ejercicio de peliculas

// let peliculas = [
//     {
//         tilulo: "el club de la pelea",
//         genero:"ficcion",
//         año: 1993,
//         sinopsis: "se matan a piñas",
        
//         mostrarDatos: function () {
//             console.log(`Titulo: ${this.titulo}\n`
//             Genero:${this.genero}\n
//             año: ${this.año});
//         }
//     }
// ]

function Alumno(nombre,edad,curso) {
    this.name = nombre;
    this.edad = edad;
    this.curso = curso;
}

let oscar = new Alumno ("oscar",35,"fullstack");
let marcos = new Alumno ("Marcos",30,"medicina");

console.log(oscar);
console.log(marcos);