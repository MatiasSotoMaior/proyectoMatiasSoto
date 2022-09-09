const $productoUbi1 = document.getElementById("card1")
$productoUbi1.outerHTML = `
<div id="card1" class="card" style="width: 18rem;">
<img src="https://www.cellshop.com/9393496-thickbox_default/vodka-smirnoff-no21-triple-distilled-998ml.jpg" class="card-img-top" alt="...">
<div class="card-body">
    <p id="textDog" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="d-flex">
<div>
    <p class="pe-3">Lorem ipsum dolor </p>
</div>
<button type="button" id="addVodka" class="btn btn-success">+</button>
<button type="button" id="counter" class="btn btn-outline-info">0</button>
<button type="button" id="removeVodka" class="btn btn-danger">-</button>
</div>
</div>

`
const $productoUbi2 = document.getElementById("card2")
$productoUbi2.outerHTML = `
<div id="card2" class="card" style="width: 18rem;">
<img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/ron-bacardi-carta-oro-12x75011-4920cb272b0deae1ed15329820220188-640-0.png" class="card-img-top" alt="...">
<div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="d-flex">
<div>
    <p class="pe-3">Lorem ipsum dolor sit </p>
</div>
<button type="button" class="btn btn-success">+</button>
<button type="button" class="btn btn-danger">-</button>
</div>
</div>
`
const $productoUbi3 = document.getElementById("card3")
$productoUbi3.outerHTML = `
<div id="card3" class="card" style="width: 18rem;">
<img src="https://carrefourar.vtexassets.com/arquivos/ids/191557/7792798002351_02.jpg?v=637511790069030000" class="card-img-top" alt="...">
<div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="d-flex">
<div>
    <p class="pe-3">Lorem ipsum dolor sit </p>
</div>
<button type="button" class="btn btn-success">+</button>
<button type="button" class="btn btn-danger">-</button>
</div>
</div>
`
const $addVodka = document.getElementById("addVodka")
const $counter = document.getElementById("counter")
const $removeVodka = document.getElementById("removeVodka")
const $added =
    $addVodka.addEventListener("click", () => {
        $counter.outerHTML = `
    <button type="button" id="counter" class="btn btn-outline-info">1</button>
    `
    })