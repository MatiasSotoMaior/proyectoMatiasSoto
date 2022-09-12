// const $removeAll = document.getElementById("card0")
// const $removeButtons = document.getElementById("buttons")
// $removeAll.remove()
// $removeButtons.remove()

const formulario = document.getElementById("login")
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let mail = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    if (mail === "mati@gmail.com" & password === "mati") {
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
        $variations.innerHTML = `
        <button id="verCerveza" class="btn btn-dark" type="button">Ver nuestras cervezas</button>
        <button id="verBebidaBlanca" class="btn btn-success" type="button">Ver nuestra bebida blanca</button>
        `
    }
})