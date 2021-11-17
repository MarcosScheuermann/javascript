class Productos{
    constructor(id, nombre, precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}


let productos = [new Productos(1, "Agua", 100,"https://media.telemundodenver.com/2019/09/beneficios-tomar-agua-shutterstock-09.jpg?fit=1040%2C675"), new Productos(2,"cerveza",180,""), new Productos(3,"Pan",100,"")];
console.log(productos);

productos.forEach(producto=>{
    let productCard = document.createElement("div");
    productCard.innerHTML = `
    <div class="card my-3" id=${producto.id} style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">${producto.precio}</a>
  </div>
  <button onclick="addProduct(event)" class="btn btn-success"> agregar al carrito</button>;
</div>
    `;

productCard.classList.add("col-4");
let productContainer = document.getElementById("#products-container");
productContainer.appendChild(productCard);

})

function addProduct(event){
    let productId = event.target.parentElement.id;
    console.log(productoId);
    let product = productos.find(producto=> producto.id == productId);
    carrito.push(product);
    console.log(carrito);

    let productCard = document.createElement("li");
    pruductCard.innerHTML=`
    
    
    `
    let carrito = document.querySelector("#carrito-container");
    carrito.appendChild(productCard);
}

function modal(){
    let modal = document.createElement("div");
    modal.innerHTML
}



