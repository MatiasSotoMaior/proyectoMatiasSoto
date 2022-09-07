/* class cervezas {
    constructor(tipo, marca, precio, IBU) {
        this.tipo = tipo;
        this.marca = marca;
        this.precio = precio;
        this.IBU = IBU;
    }
}
class bebidaBlanca {
    constructor(tipo, marca, precio, porcentaje) {
        this.tipo = tipo;
        this.marca = marca;
        this.precio = precio;
        this.porcentaje = porcentaje;
    }
}
const bebida = [];
bebida.push(new cervezas("cerveza", "Patagonia", 500, 38));
bebida.push(new cervezas("cerveza", "Quilmes", 450, 20));
bebida.push(new cervezas("cerveza", "Brahama", 400, 14));
bebida.push(new bebidaBlanca("Ron", "Havanna", 1800, 42));
bebida.push(new bebidaBlanca("Vodka", "Sky", 1200, 39));

let primeraAccion = prompt("bienvenido a bebidas mati, escoja la acción a realizar \n" +
    "A)Filtrar por precio \n" +
    "B)Mostrar Stock")
switch (primeraAccion) {
    case "A" && "a":
        let ordenPrecio = parseInt(prompt("Indique valor maximo del producto"))
        const filtro = bebida.filter(alcohol => alcohol.precio <= ordenPrecio)
        console.log(filtro)
        break;
    case "B" && "b":
        console.log(bebida)
        break;
} */

/* // console.log(document.getElementById("card1"))
// console.log(document.querySelectorAll(".card"))

// AGREGAR ATTRIBUTE, EN ESTE CASO UN HREF (SI HABIA UN HREF ANTES, LO REEMPLAZA, ASI CON TODO)
const $prueba = document.querySelector(".navbar-brand")
$prueba.setAttribute("href", "https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=64")

// AGREGAR O ELIMINAR UNA DE LAS CLASES (LO QUE SE ENCUENTRA ADENTRO DE CLASS)
const $prueba2 = document.getElementById("card1")
$prueba2.classList.add("bg-success")
$prueba2.classList.remove("bg-success")

// AÑADIR HTML, CON OUTER SE REEMPLAZA LO SELECCIONADO, CON INNERHTML SE AGREGA OTRO ADENTRO
const $prueba3 = document.getElementById("textDog")
$prueba3.outerHTML = `
<p id="textDog" class="card-text">perritooooo uwu</p>`

// SELECCIONANDO POR PARENTESCO
const $prueba4 = document.getElementById("card0")
console.log($prueba4.parentElement)
console.log($prueba4.children[3]) */

const $producto = document.getElementById("card0")
const $producto1 = innerHTML = `
<div id="card1" class="card" style="width: 18rem;">
                <img src="https://www.cellshop.com/9393496-thickbox_default/vodka-smirnoff-no21-triple-distilled-998ml.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p id="textDog" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
`
const $producto2 = innerHTML = `
<div id="card2" class="card" style="width: 18rem;">
                <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/ron-bacardi-carta-oro-12x75011-4920cb272b0deae1ed15329820220188-640-0.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
`
const $producto3 = innerHTML = `
<div id="card3" class="card" style="width: 18rem;">
<img src="https://carrefourar.vtexassets.com/arquivos/ids/191557/7792798002351_02.jpg?v=637511790069030000" class="card-img-top" alt="...">
<div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
`
const $producto4 = innerHTML = `
<div id="card4" class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo7PEtNqHdUNquaVv_Y4REDAV09uMOFg4xA&usqp=CAU" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
`

$producto.appendChild($producto1)
$producto.appendChild($producto2)
$producto.appendChild($producto3)
$producto.appendChild($producto4)