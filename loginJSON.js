// TRAIGO LOS DATOS DEL FORM
const formulario = document.getElementById("login")
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let mail = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    // EL USO DE JSON EN ESTE CASO NO ES NECESARIO YA QUE EL MAIL Y EL PASSWORD SON AMBOS STRINGS (CADENAS DE TEXTO) 
    // Y LA FUNCION DE JSON ES PASAR OBJETS A STRINS, PERO DECIDI INCLUIRLO IGUAL PARA NO OLVIDARME COMO SE USA
    // A)CONVIERTO EL "OBJECT" EN STRING  
    const mailJSON = JSON.stringify(mail);
    const passwordJSON = JSON.stringify(password);
    // B)GUARDO EN LOCAL Storage, PRIMERO LA KEY Y DSP EL VALUE
    localStorage.setItem("User", mailJSON);
    localStorage.setItem("Password", passwordJSON);
    // C)LLAMO EL STRING POR LA KEY, NO POR EL VALUE 
    //   Y POR ULTIMO LO VUELVO A CONVERTIR EN OBJECT CON PARSE
    const mailEnLocalStorage = localStorage.getItem("User");
    const mailParseado = JSON.parse(mailEnLocalStorage);
    const passwordEnLocalStorage = localStorage.getItem("Password");
    const passwordParseado = JSON.parse(passwordEnLocalStorage);
    // AL TERMINAR DE TRAER LOS DATOS DEL FORM LOS VALIDO QUE SEAN CORRECTOS
    if (mailParseado === "mati@gmail.com" & passwordParseado === "mati") {
        // SI SON CORRECTOS ME VA A DESENCADENAR TODO EL STOCK
        const $removeLogin = document.getElementById("login");
        const $stock = document.getElementById("card");
        const $variations = document.getElementById("buttons");
        console.log($removeLogin)




    }
})