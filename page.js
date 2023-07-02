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
class BarrasIntegra{
    constructor (marcaI, detI, pesoI, precioI){
        this.marca = marcaI,
        this.detalle = detI,
        this.peso = pesoI,
        this.precio = precioI
    }
}
const barraInt1 = new BarrasIntegra("Integra", "almendra y nuez", 55, 250)
const barraInt2 = new BarrasIntegra("integra", "girasol y arandanos", 55, 250)
const barraInt3 = new BarrasIntegra("integra", "caju y arandanos", 55, 250)
const barraInt4 = new BarrasIntegra("integra", "banana y nuez", 55, 250)
const barraInt5 = new BarrasIntegra("integra", "chocolate y avena", 55, 250)

//array barras integra
const catalogoIntegra = [barraInt1, barraInt2, barraInt3, barraInt4, barraInt5]

//impresion de las barras
for(let i=0; i<catalogoIntegra.length; i++){
    console.log(catalogoIntegra[i])
}


//barras MUECAS
class BarrasMuecas{
    constructor (marcaI, detI, pesoI, precioI){
        this.marca = marcaI,
        this.detalle = detI,
        this.peso = pesoI,
        this.precio = precioI
    }
}
const barraMuecas1 = new BarrasMuecas("Muecas", "cacao y avellanas", 45, 250)
const barraMuecas2 = new BarrasMuecas("Muecas", "pasas y almendras", 45, 250)
const barraMuecas3 = new BarrasMuecas("Muecas", "manzana y arandanos", 45, 250)
const barraMuecas4 = new BarrasMuecas("Muecas", "pasas y arandanos sin azucar", 45, 250)
const barraMuecas5 = new BarrasMuecas("Muecas", "banana y dulce de leche", 45, 250)

//array barras Muecas
const catalogoMuecas = [barraMuecas1, barraMuecas2, barraMuecas3, barraMuecas4, barraMuecas5]
//impresion barras Muecas
for(let i=0; i<catalogoMuecas.length; i++){
    console.log(catalogoMuecas[i])
}

//barras ZAFRAN
class BarrasZafran{
    constructor (marcaI, detI, pesoI, precioI){
        this.marcha = marcaI;
        this.detalle = detI;
        this.peso = pesoI;
        this.precio = precioI
    }
}
const barraZafran1 = new BarrasZafran ("Zafran", "almendra y coco", 28, 220)
const barraZafran2 = new BarrasZafran ("Zafran", "manzana y chia", 28, 220)
const barraZafran3 = new BarrasZafran ("Zafran", "mani y cacao", 28, 200)
const barraZafran4 = new BarrasZafran ("Zafran", "caju y semillas de zapallo", 28, 220)
const barraZafran5 = new BarrasZafran ("Zafran", "quinoa y chocolate", 28, 220)
const barraZafran6 = new BarrasZafran ("Zafran", "arandanos y almendras", 28, 220)

//array barras Zafran
const catalogoZafran = [barraZafran1, barraZafran2, barraZafran3, barraZafran4, barraZafran5, barraZafran6]
//impresion barras Integra
for(let i=0; i<catalogoZafran.length; i++){
    console.log(catalogoZafran[i])
}


//array de arrays (catalogo Integra, Muecas y Zafran)
const catalogoProductos = [catalogoIntegra, catalogoMuecas, catalogoZafran]

//Busqueda de producto por filtro, includes
function filtrarProductos (array){
    let datoBuscado = prompt ("¿Que estas buscando?")
    let busqueda = array.filter(
        (dato) =>    dato.marca.toLowerCase().includes(datoBuscado.toLowerCase()) ||
                     dato.detalle.toLowerCase().includes(datoBuscado.toLowerCase()) ||
                     dato.peso.includes(datoBuscado) ||  dato.precio.includes(datoBuscado)
    )
    if(busqueda.lenght == 0){
        console.log(`No encontramos ${datoBuscado} en nuestro catalogo`)
    }
    else{
        console.log(busqueda)
    }
}
filtrarProductos(catalogoProductos)



//Busqueda de producto INTEGRA por sabor
//function buscarProductoInt(array){
 //   let saborBusqueda = prompt("Ingrese el sabor deseado: ")
 //   let busqueda = array.find(
 //       (produ) => produ.detalle.toLowerCase() == saborBusqueda.toLowerCase()
 //   )
 //   if(busqueda == undefined){
 //       console.log('no hubo resultados para su búsqueda')
 //   }else{
 //       console.log(busqueda)
 //   }
//}
//buscarProductoInt(catalogoIntegra)


