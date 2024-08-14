import {  pintarVillas, pintarC, villas } from "../../Modules/Modules.js"


pintarVillas(villas)

document.getElementById("busqueda").addEventListener('keyup', e => {
    let filtradosTexto = filtroDeTexto(villas)
    pintarVillas(filtradosTexto)
    // let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    // checksConPalomita = checksConPalomita.map(e => e.value)

    // if (checksConPalomita == 0) {
    //     pintarC(filtradosTexto)
    // }
    // else {
    //     let arregloConChecks = filtroChecks(filtradosTexto)
    //     pintarC(arregloConChecks)
    // }

})
function filtroDeTexto(a) {

    let buscadorHome = document.getElementById("busqueda").value.toLowerCase()
    let filtrado = a.filter(nota =>
        nota.name.toLowerCase().includes(buscadorHome))
    return filtrado;
}


// Categorías filtradas

document.getElementById("makeCategorie").addEventListener('change', e => {
    let arregloConChecks = filtroChecks(arregloEventos)
    if (arregloConChecks.length == 0) {
        let nuevoFiltro = filtroDeTexto(villas)
        pintarVillas(nuevoFiltro)
    } else {
        let filtradosTexto = filtroDeTexto(arregloConChecks)
        pintarC(filtradosTexto)
    }
})

function filtroChecks(array) {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    let arregloFilter = array.filter(x => checksConPalomita.includes(x.category))
    return arregloFilter;
}
