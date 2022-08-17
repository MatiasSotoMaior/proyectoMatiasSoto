// La idea es que pida un contraseña y al ingresar la correcta se detenga el ciclo

for (let i = 1; true; i++) {
    let nombre = prompt("ingresar contraseña");
    if (nombre == "matias") {
        alert("¡contraseña correcta!")
        break
    }
    alert("contraseña incorrecta")
}