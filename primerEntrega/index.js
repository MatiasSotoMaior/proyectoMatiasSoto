class cervezas {
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
}