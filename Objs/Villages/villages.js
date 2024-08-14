import { filtroChecks, pintarVillas, filtroDeTexto, pintarC, villas } from "../../Modules/Modules.js"


pintarVillas(villas)

document.getElementById("busqueda").addEventListener('keyup', e => {
    let filtradosTexto = filtroDeTexto(villas)
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)

    if (checksConPalomita == 0) {
        pintarC(filtradosTexto)
    }
    else {
        let arregloConChecks = filtroChecks(filtradosTexto)
        pintarC(arregloConChecks)
    }

})

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

