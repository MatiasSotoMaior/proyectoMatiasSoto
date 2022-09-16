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
        const $removeLogin = document.getElementById("login")
        const $stock = document.getElementById("card")
        const $variations = document.getElementById("buttons")
        $removeLogin.remove()
        $stock.innerHTML = `
        <div id="card0" class="row d-flex justify-content-between">
            <div id="card1"></div>
            <div id="card2"></div>
            <div id="card3"></div>
            <div id="card4"></div>
            <div id="" class="mt-3 card" style="width: 18rem;">
                <img src="https://www.cellshop.com/9393496-thickbox_default/vodka-smirnoff-no21-triple-distilled-998ml.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p id="textDog" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div id="" class="mt-3 card" style="width: 18rem;">
                <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/ron-bacardi-carta-oro-12x75011-4920cb272b0deae1ed15329820220188-640-0.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div id="" class="mt-3 card" style="width: 18rem;">
                <img src="https://carrefourar.vtexassets.com/arquivos/ids/191557/7792798002351_02.jpg?v=637511790069030000" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div id="" class="mt-3 card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo7PEtNqHdUNquaVv_Y4REDAV09uMOFg4xA&usqp=CAU" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
        `
            // ADEMAS DEL STOCK TAMBIEN DESENCADENA EL FILTRO DE VER CERVEZAS O VER BEBIDA BLANCA,
            // YA QUE SI LO PONGO EN OTRO LADO NO FUNCIONA
        $variations.innerHTML = `
            <button id="verCerveza" class="btn btn-dark" type="button">Ver nuestras cervezas</button>
            <button id="verBebidaBlanca" class="btn btn-success" type="button">Ver nuestra bebida blanca</button>
    
            `
        const $removeAll = document.getElementById("card0")
        const $selectCerveza = document.getElementById("verCerveza")
        const $selectBebidaBlanca = document.getElementById("verBebidaBlanca")
        const $add = document.getElementById("card")

        $selectCerveza.addEventListener("click", () => {
            $removeAll.remove()
            $add.innerHTML = `
            <div id="card0" class="row d-flex justify-content-between">
    
                <div id="" class="card" style="width: 18rem;">
                    <img src="https://carrefourar.vtexassets.com/arquivos/ids/191557/7792798002351_02.jpg?v=637511790069030000" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
    
                <div id="" class="card" style="width: 18rem;">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo7PEtNqHdUNquaVv_Y4REDAV09uMOFg4xA&usqp=CAU" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            `
        })


        $selectBebidaBlanca.addEventListener("click", () => {
                $removeAll.remove()
                $add.innerHTML = `
            <div id="card0" class="row d-flex justify-content-between">
    
            <div id="" class="card" style="width: 18rem;">
            <img src="https://www.cellshop.com/9393496-thickbox_default/vodka-smirnoff-no21-triple-distilled-998ml.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p id="textDog" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div id="" class="card" style="width: 18rem;">
            <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/ron-bacardi-carta-oro-12x75011-4920cb272b0deae1ed15329820220188-640-0.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
            </div>
            `
            })
            // SI NO COINCIDEN LOS DATOS DEL LOGIN SALTA UN ALERT 
    } else {
        alert("Usuario o contraseña incorrectos")
    }
})