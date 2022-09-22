const showOnStock = document.getElementById("onStock")
const showCards = document.getElementById("card")
const removeLogin = document.getElementById("login")
    // ACA CREO UNA FUNCION QUE ME VUELVE A MOSTRAR STOCK 
const showContent = () => {
        showOnStock.classList.remove("hideContent")
        showCards.classList.remove("hideContent")
        removeLogin.remove()
    }
    // TRAIGO LOS DATOS DEL FORM
const formulario = document.getElementById("login")
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let mail = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    // AL TERMINAR DE TRAER LOS DATOS DEL FORM LOS VALIDO QUE SEAN CORRECTOS
    mail === "mati@gmail.com" & password === "mati" ? showContent() : Swal.fire('contraseña incorrecta')
})