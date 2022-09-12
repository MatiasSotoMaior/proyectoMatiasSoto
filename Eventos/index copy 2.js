const $removeAll = document.getElementById("card0")
const $removeButtons = document.getElementById("buttons")
$removeAll.remove()
$removeButtons.remove()

function login(event) {
    event.preventDefault()
    console.log(event);
    const formulario = document.getElementById("login");
    console.dir(formulario)
    const valueUsername = formulario[0].value;
    const valuePassword = formulario[1].value;
    console.log(valueUsername)
    console.log(valuePassword)
}