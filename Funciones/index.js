function sumar(a, b) {
    return a + b;
}

let name = (prompt("indique su nombre"))
alert("Buenos dias " + name +
    ", calculemos el costo de su evento, por favor indique qué servicios le interesan")

let suma = 0
let luces = prompt("Desea que su evento incluya luces? Indique (si) o (no)")
let sonido = prompt("Desea que su evento incluya sonido? Indique (si) o (no)")
let dj = prompt("Desea que su evento incluya DJ? Indique (si) o (no)")

if (luces == "si") {
    sumar(5000, suma)
} else if (sonido == "si") {
    sumar(10000, suma)
} else if (dj == "si") {
    sumar(1000, suma)
    console.log(suma)
}