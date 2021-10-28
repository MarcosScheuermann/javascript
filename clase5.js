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

//CARRITO DE COMPRAS

let carrito = [];

function agregarProductos(){
    let producto = prompt("ingrese un producto");
    carrito.push(producto);
    console.log(carrito);
}

function mostrarCarrito() {
    if(carrito.length===0){
        alert('Todavia no agregaste producto');
    }else{
        alert(`los productos de tu carrito: ${carrito.join()}`);
    }
    
}

function buscarProducto() {
    let prod = prompt('que producto desea saber si esta en el carrito');
    if (carrito.includes(producto)===true){
        alert('El producto esta en tu carrito')
    }else{
        alert('El producto no esta en tu carrito')
    }
}

function filtrarProductos() {
    let palabraAFiltrar = prompt("Porque palabra queres filtrar tu carrito");
    let productosFiltrados = carrito.filter(producto => producto.includes(palabrasAFiltrar));
    if (productosFiltrados.length===0) {
        alert("El producto que desea borrar no esta en su carrito")
    }else{
         alert(`los productos que contienen la palabra especificada son:\n- ${productosFiltrados.join("\n-")}`)
    }
    }


function eliminarProducto() {
    let productoAEliminar = prompt("ingrese el producto a eliminar");
    let posicion = carrito.indexOf(productosAEliminar);
    if (posicion===-1) {
        alert("el productos que desea borrar no esta en su carrito")
    }else{
        carrito.splice(posicion, 1);
        alert("el producto se borro correctamente")
    }
    
    
}