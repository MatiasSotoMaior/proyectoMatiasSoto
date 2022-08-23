// function sumar(a, b) {
//     return a + b;
// }

let name = (prompt("indique su nombre"))
alert("Buenos dias " + name +
    ", calculemos el costo de su evento, por favor indique qué servicios le interesan")

// let suma = 0
let servicio = prompt("A)Unicamente sonido \n" +
    "B)Sonido + iluminacion \n" +
    "C)Sonido + iluminacion + DJ \n" +
    "(indique A, B o C)")

switch (servicio) {
    case "A":
        alert("El costo es de " + 5000)
        break;
    case "B":
        alert("El costo es de " + 10000)
        break;
    case "C":
        alert("El costo es de " + 15000)
        break;
}