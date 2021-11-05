// Crear una lista de Libros

class lista {
    constructor(dueño){
        this.dueño=dueño;
        this.librosYaLeidos=[];
        this.librosNoLeidos=[];
        this.siguienteLibro={};
        this.libroActual={};
        this.ultimoLibro={};
        this.Libros=[];
    }
    agregarLibro(Libro){
        this.Libros.push(libro);
        if (libro.leido) { // es lo mismo que utilizar libro.leido == true
            this.librosYaLeidos.push(Libro)
            
        }else{
            this.librosNoLeidos.push(libro);
        }
    }
}

class libro {
    constructor(titulo,genero,autor,leido){
        this.titulo=titulo;
        this.genero=genero;
        this.autor=autor;
        this.leido=leido;
    }
}

let padreRicoPadrePadrePobre = new Libro ("padre rico, padre pobre","Finanzas","Robert",false);
let elPrincipito = new Libro("El Principito", "infantil", "Anthony",false);
let arteDeLaGuerra = new Libro ("el arte de la guerra","Liderazgo","sun",false); 

let diego = new lista("Diego");

console.log(diego);