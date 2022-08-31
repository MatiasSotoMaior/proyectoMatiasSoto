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

// const buscarStock = bebida.find(buscador => buscador === cervezas)
// console.log(buscarStock)