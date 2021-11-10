// // Crear una lista de Libros

// class lista {
//     constructor(dueño){
//         this.dueño=dueño;
//         this.librosYaLeidos=[];
//         this.librosNoLeidos=[];
//         this.siguienteLibro={};
//         this.libroActual={};
//         this.ultimoLibro={};
//         this.Libros=[];
//     }
//     agregarLibro(Libro){
//         this.Libros.push(libro);
//         if (libro.leido) { // es lo mismo que utilizar libro.leido == true
//             this.librosYaLeidos.push(Libro)
            
//         }else{
//             this.librosNoLeidos.push(libro);
//         }
//     }

//     empezarLibro(nombrelibro){
//         let libroQueCoincida = this.Libros.find(libro => libro.titulo == nombreLibro)
//         if(!libroQueCoincida){
//             console.log("Ese lIbro no esta en tu biblioteca");
//         }else{
//             this.libroActual=libroQueCoincida;
//         }

//         finalizarLibro(){
//             this.ultimoLibro=this.libroActual;
//             this.libroActual=Null;
//             this.librosYaLeidos.push(this.ultimoLibro);

//             this.librosNoLeidos(this.librosNoLeidos.indexOf(this.ultimoLibro));
//         }
        
//     }

// }

// class libro {
//     constructor(titulo,genero,autor,leido){
//         this.titulo=titulo;
//         this.genero=genero;
//         this.autor=autor;
//         this.leido=leido;
//     }
// }

// let padreRicoPadrePadrePobre = new Libro ("padre rico, padre pobre","Finanzas","Robert",false);
// let elPrincipito = new Libro("El Principito", "infantil", "Anthony",false);
// let arteDeLaGuerra = new Libro ("el arte de la guerra","Liderazgo","sun",false); 

// let diego = new lista("Diego");

// diego.agregarLibro(padreRicoPadrePadrePobre);
// diego.agregarLibro(elPrincipito);
// diego.agregarLibro(arteDeLaGuerra);

// console.log(diego);

// function test(x, y) {
//     if (x > y) {
//         document.write(x);
//         return ()
//     } else {
//         document.write(y);
//     }
// }

// test(5, 8)

// var arr = new Array(3, 6, 8);
// document.write(arr[1]);

function hello() {
    alert("Hi");
}