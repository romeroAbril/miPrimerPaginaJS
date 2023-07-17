// function pedirMail(){
//     let confirmacion = prompt ('¿Desea recibir novedades via Mail?');
//     if(confirmacion.toLowerCase() == "si"){
//         let ingresoMail = prompt ('Ingrese su direccion de Mail');
//         alert("¡Pronto comenzarás a recibir nuestras novedades!");
//     }
// }

// function sumarProductos(){
//     let cont = 1;
//     let i = prompt (' Ingrese "+" para sumar unidades al carrito. Cuando quiera finalizar ingrese cualquier caracter');
//     while( i == "+"){
//         i = prompt (' Ingrese "+" para sumar unidades al carrito. Cuando quiera finalizar ingrese cualquier caracter');
//         cont++; 
//     }

//     alert ("El total de las unidades agregadas es de" + parseInt (cont))
// } 

// pedirMail();

// //simulación en el html de los productos
// let compra = prompt ('¿Agregar producto al carrito?')
// if(compra.toLowerCase() == "si"){
//     sumarProductos();
// }


//catálogos de barritas con arrays de objetos
//barras INTEGRA
class BarrasIntegra {
  constructor(marcaI, detI, pesoI, precioI, imagenI) {
    this.marca = marcaI,
      this.detalle = detI,
      this.peso = pesoI,
      this.precio = precioI,
      this.imagen = imagenI
  }
}
const barraInt1 = new BarrasIntegra("Integra", "almendra y nuez", 55, 250, "barraIntegraAlmendraNuez.jpg")
const barraInt2 = new BarrasIntegra("integra", "girasol y arandanos", 55, 250, "barrasIntegraGirasolArandanos.jpg")
const barraInt3 = new BarrasIntegra("integra", "caju y arandanos", 55, 250, "barraIntegraCajuArandanos.jpg")
const barraInt4 = new BarrasIntegra("integra", "banana y nuez", 55, 250, "barraIntegraBananaNuez.jpg")
const barraInt5 = new BarrasIntegra("integra", "chocolate y avena", 55, 250, "barraIntegraAvenaCacaoPuro.jpg")

//array barras integra
const catalogoIntegra = [barraInt1, barraInt2, barraInt3, barraInt4, barraInt5]

//impresion de las barras
for (let i = 0; i < catalogoIntegra.length; i++) {
  console.log(catalogoIntegra[i])
}


//barras MUECAS
class BarrasMuecas {
  constructor(marcaI, detI, pesoI, precioI, imagenI) {
    this.marca = marcaI,
      this.detalle = detI,
      this.peso = pesoI,
      this.precio = precioI,
      this.imagen = imagenI
  }
}
const barraMuecas1 = new BarrasMuecas("Muecas", "cacao y avellanas", 45, 250, "barraMuecasCacaoAvellana.jpg")
const barraMuecas2 = new BarrasMuecas("Muecas", "pasas y almendras", 45, 250, "barraMuecasPasasAlmendra.jpg")
const barraMuecas3 = new BarrasMuecas("Muecas", "manzana y arandanos", 45, 250, "barraMuecasManzanaArandanos.jpg")
const barraMuecas4 = new BarrasMuecas("Muecas", "pasas y arandanos sin azucar", 45, 250, "barraMuecasPasasArandanos.jpg")
const barraMuecas5 = new BarrasMuecas("Muecas", "banana y dulce de leche", 45, 250, "barraMuecasBananaDdl.jpg")

//array barras Muecas
const catalogoMuecas = [barraMuecas1, barraMuecas2, barraMuecas3, barraMuecas4, barraMuecas5]
//impresion barras Muecas
for (let i = 0; i < catalogoMuecas.length; i++) {
  console.log(catalogoMuecas[i])
}

//barras ZAFRAN
class BarrasZafran {
  constructor(marcaI, detI, pesoI, precioI, imagenI) {
    this.marca = marcaI,
      this.detalle = detI,
      this.peso = pesoI,
      this.precio = precioI,
      this.imagen = imagenI
  }
}
const barraZafran1 = new BarrasZafran("Zafran", "almendra y coco", 28, 220, "barraZafranAlmendraCoco.jpg")
const barraZafran2 = new BarrasZafran("Zafran", "manzana y chia", 28, 220, "barrasZafranManzanaChia.jpg")
const barraZafran3 = new BarrasZafran("Zafran", "mani y cacao", 28, 200, "barraZafranManiCacao.jpg")
const barraZafran4 = new BarrasZafran("Zafran", "caju y semillas de zapallo", 28, 220, "barraZafranCajuZapallo.jpg")
const barraZafran5 = new BarrasZafran("Zafran", "quinoa y chocolate", 28, 220, "barraZafranQuinoaChocolate.jpg")
const barraZafran6 = new BarrasZafran("Zafran", "arandanos y almendras", 28, 220, "barraZafranAlmendraArandano.jpg")

//array barras Zafran
const catalogoZafran = [barraZafran1, barraZafran2, barraZafran3, barraZafran4, barraZafran5, barraZafran6]
//impresion barras Zafran
for (let i = 0; i < catalogoZafran.length; i++) {
  console.log(catalogoZafran[i])
}


//array de arrays (catalogo Integra, Muecas y Zafran)
const catalogoProductos = [catalogoIntegra, catalogoMuecas, catalogoZafran]


//Busqueda de producto por filtro, includes
function filtrarProductos(array) {
  let datoBuscado = prompt("¿Que estas buscando?")

  let busqueda = array
    .flat()
    .filter(
      (dato) =>
        dato.marca.toLowerCase().includes(datoBuscado.toLowerCase()) ||
        dato.detalle.toLowerCase().includes(datoBuscado.toLowerCase()) ||
        String(dato.peso).includes(datoBuscado) ||
        String(dato.precio).includes(datoBuscado)
    )

  if (busqueda.length == 0) {
    console.log(`No encontramos ${datoBuscado} en nuestro catalogo`)
  } else {
    console.log(busqueda)
  }
}
//filtrarProductos(catalogoProductos)



//DOM y eventos barra de búsqueda
//let busquedaCatalogo = document.getElementById("botonBusqueda")
//busquedaCatalogo.addEventListener("click", () => {
//  filtrarProductos(catalogoProductos)
//})


//impresion productos Integra
let divIntegra = document.getElementById("productosIntegra")

function printProductosIntegra(array) {
  for (let barra of array) {
    let nuevoProductoIntegra = document.createElement("div")
    divIntegra.innerHTML = '';
    
    nuevoProductoIntegra.className = "col-12 col-md-6 col-lg-4 my-6"
    nuevoProductoIntegra.innerHTML =
    ` <div class="card" style="width: 18rem;">
    <img src="imagenes/${barra.imagen}" class="card-img-top" alt="barra ${barra.marca} sabor ${barra.detalle}">
    <div class="card-body">
    <h3 class="card-title"> Marca: ${barra.marca}</h3>
    <p class="card-text"> ${barra.detalle}</p>
    <h4 class="card-text">Precio: ${barra.precio}</h4>
    <h5 class="card-text">Peso: ${barra.peso}G </h5>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>`
    divIntegra.appendChild(nuevoProductoIntegra)
    
  }
}


//impresion productos Muecas
let divMuecas = document.getElementById("productosMuecas")

function printProductosMuecas(array) {
  for (let barra of array) {
    let nuevoProductoMuecas = document.createElement("div")
    divMuecas.innerHTML = '';

    nuevoProductoMuecas.className = "col-12 col-md-6 col-lg-4 my-6"
    nuevoProductoMuecas.innerHTML =
      ` <div class="card" style="width: 18rem;">
    <img src="imagenes/${barra.imagen}" class="card-img-top" alt="barra ${barra.marca} sabor ${barra.detalle}">
    <div class="card-body">
    <h3 class="card-title"> Marca: ${barra.marca}</h3>
    <p class="card-text"> ${barra.detalle}</p>
    <h4 class="card-text">Precio: ${barra.precio}</h4>
    <h5 class="card-text">Peso: ${barra.peso}G </h5>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
                              </div>`
    divMuecas.appendChild(nuevoProductoMuecas)
  }
}



//impresion productos Zafran
let divZafran = document.getElementById("productosZafran")

function printProductosZafran(array) {
  for (let barra of array) {

    let nuevoProductoZafran = document.createElement("div")
    divZafran.innerHTML = '';

    nuevoProductoZafran.className = "col-12 col-md-6 col-lg-4 my-6"
    nuevoProductoZafran.innerHTML =
      ` <div class="card" style="width: 18rem;">
    <img src="imagenes/${barra.imagen}" class="card-img-top" alt="barra ${barra.marca} sabor ${barra.detalle}">
    <div class="card-body">
    <h3 class="card-title"> Marca: ${barra.marca}</h3>
    <p class="card-text"> ${barra.detalle}</p>
    <h4 class="card-text">Precio: ${barra.precio}</h4>
    <h5 class="card-text">Peso: ${barra.peso}G </h5>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>`
    divZafran.appendChild(nuevoProductoZafran)

  }
}

//boton mostrar catálogos - eventos
let showMuecasBtn = document.getElementById("mostrarMuecasBtn")
showMuecasBtn.addEventListener("click", () => {

  printProductosMuecas(catalogoMuecas)
})


let showIntegraBtn = document.getElementById("mostrarIntegraBtn")
showIntegraBtn.addEventListener("click", () => {

  printProductosIntegra(catalogoIntegra)
})


let showZafranBtn = document.getElementById("mostrarZafranBtn")
showZafranBtn.addEventListener("click", () => {

  printProductosZafran(catalogoZafran)
})


//dark mode y light mode JSON
let oscuro = document.getElementById("modoOscuro")
let claro = document.getElementById("modoClaro")
let original = document.getElementById("deshacer")

let darkMode = localStorage.getItem("darkMode")
if (darkMode == "true"){
  document.body.classList.add("modoOscuro")
  modoOscuro.addEventListener("click", () =>{
    document.body.classList.add("modoOscuro")
    localStorage.setItem("darkMode", true)
  })
}
