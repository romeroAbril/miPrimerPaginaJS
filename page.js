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
const barraInt1 = new BarrasIntegra("Integra", "almendra", 55, 250)
const barraInt2 = new BarrasIntegra("integra", "girasol", 55, 250)
const barraInt3 = new BarrasIntegra("integra", "caju", 55, 250)
const barraInt4 = new BarrasIntegra("integra", "banana", 55, 250)
const barraInt5 = new BarrasIntegra("integra", "chocolate", 55, 250)

//array barras integra
const catalogoIntegra = [barraInt1, barraInt2, barraInt3, barraInt4, barraInt5]

//impresion de las barras
for(let i=0; i<catalogoIntegra.length; i++){
    console.log(catalogoIntegra[i])
}

//Busqueda de producto INTEGRA por sabor
function buscarProductoInt(array){
    let saborBusqueda = prompt("Ingrese el sabor deseado: ")
    let busqueda = array.find(
        (produ) => produ.detalle.toLowerCase() == saborBusqueda.toLowerCase()
    )
    if(busqueda == undefined){
        console.log('no hubo resultados para su búsqueda')
    }else{
        console.log(busqueda)
    }
}
buscarProductoInt(catalogoIntegra)


