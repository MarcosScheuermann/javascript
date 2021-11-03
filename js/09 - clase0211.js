// // repaso
// // OBJETOS

// let personaje = {
//     nombre: "iroman",
//     superpoder: ["armadura","tiene mucha plata"],
//     pareja: {
//         nombre: "pappers",
//         tieneSuperPoderes: false,
//     },
//     pertenece: "avenger",
//     creador: "tony stark",
//     actor:"robert danney jr",

//     volar: function(){                  //metodos
//         console.log("estoy volando");
//     },
//     tiraRayosLaser: function(){         //metodos
//         console.log("pium");
//     },
// }

// console.log(personaje.nombre); //iroman

// console.log(personaje.pareja.nombre); //pappers

// personaje.tiraRayosLaser();

// personaje.pareja.tieneSuperPoderes = true; // modifico una propiedad del objeto

// function Personaje(nombre,actor,pertenece) {
//     this.nombre = nombre;
//     this.actor = actor;
//     this.pertenece = pertenece;   
// }

// let iroman = new Personaje("Iroman","Robert Jr","marvel");
// let superman = new Personaje ("Superman","henry cavil","DC");

// console.log(iroman);
// console.log(superman);

// class Personaje { //clase
//     constructor(nombre, actor, pertence){
//         this.nombre = nombre;
//         this.actor = actor;
//         this.pertenece = pertenece;
//     }
// }

// let iroman = new Personaje("Iroman", "Robert Jr", "marvel"); //OBJETOS INSTANCIADOS
// let superman = new Personaje ("Superman","henry cavil","DC");

// console.log(iroman);
// console.log(superman);

//setters y getters

// let casa = {
//     direccion: "san martin 250",
//     color: "uva",

//     get obtenerColor(){
//         return this.color
//     },

//     set agregarColorTecho(color){
//         this.colorTecho = color 
//     },
// }

// console.log(casa.obtenerColor);

// casa.agregarColorTecho = "verde";

// console.log(casa);

// POO - Programacion orientadas a Objetos

// clases --> un molde

// class Persona{
//     constructor(nombre, edad, nacionalidad){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.nacionalidad = nacionalidad;
//     };

//     saludar(){
//         console.log(`Hola, soy ${this.nombre}`);
//     };

// }

// let diego = new Persona("Diego", 35, "Argentina");
// let Marcos = new Persona("Marcos", 30, "Argentina");
// let Fer = new Persona("Fer", 29, "Argentina");
// let pablo = new Persona("Pablo", 40, "Argentina");

// console.log(diego);
// console.log(Marcos);
// console.log(Fer);
// console.log(pablo);

// diego.saludar()
// Marcos.saludar()
// Fer.saludar()
// pablo.saludar()

// //herencia

// class Mentor extends Persona{
//     constructor(nombre, edad, nacionalidad, comision, curso){
//         super(nombre, edad, nacionalidad);
//         this.comision=comision;
//         this.curso=curso;
//     }
    
// }

// class Alumno extends Persona{
//     constructor(nombre, edad, nacionalidad, disponibilidad){
//         super(nombre,edad,nacionalidad);
//         this.disponibilidad=disponibilidad;
//     }
//     saludar(){
//         console.log(`Hola, soy el alumno ` + this.nombre);
//     }

// }

// let roman = new Mentor ("Roman", 26, "Argentina","21I","Fullstack")

// console.log(roman);
// roman.saludar();

// let german = new Alumno ("German", 25, "Argentina","Todo el Dia");

// console.log(german);

// german.saludar();

//PRACTICA POO

class Cuenta {
    constructor(titular,numero,alias){
        this.titular = titular;
        this.saldo = 0;
        this.numero = numero;
        this.alias = alias;
    }
    ingresar(monto){
        if(monto<=0){
            alert("el monto no es valido");

        }else{
            this.saldo=this.saldo + monto;
        }
    extraer(monto){
        if (monto<=0) {
            alert("el monto no es valido")
        }else if(monto<=this.saldo){
            this.saldo=this.saldo-monto;
            alert("extraccion correcta");
        }else{
            alert("Saldo insuficiente");
        }
        informar(){
            alert(`La cuenta ${this.numero} del titular ${this.titular} tiene un saldo ${this.saldo}`);
        }
    }
    }
}

let diego = new Cuenta ("Diego", 3434343434, "eldiegote");
