// alert("ingrese un texto y la cantidad de veces que quiere que se repita le mismo");
// let cantidad = parseInt(prompt("cantidad de veces"));
// let texto = prompt("texto");
// for (let i = 0; i < cantidad; i++) {
//     console.log(texto);
// }
// console.log("nasi");

// let ingresarNumero = parseInt(prompt("ingresar numero"))

// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     alert(ingresarNumero + " X " + i + " = " + resultado)
// }

for (let i = 1; true; i++) {
    let nombre = prompt("ingresar contraseña");
    if (nombre == "matias") {
        alert("¡contraseña correcta!")
        break
    }
    alert("contraseña incorrecta")
}