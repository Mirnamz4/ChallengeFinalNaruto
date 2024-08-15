import {clans} from "../Modules/Modules.js"

console.log(clans);

pintarClans(clans)

function pintarClans(arreglo) {
    let contenedorClanes = document.getElementById("contenedorClanes")
    contenedorClanes.innerHTML = ""

    if (arreglo.length > 0) {
        for (let i = 0; i < arreglo.length; i++) {
            let tarjeta = document.createElement('div')
            tarjeta.className = "card tarjetaClan col-md-4"
            tarjeta.id = `tarjetaTrans`

            tarjeta.innerHTML = `
            
            <div class="card-body text-center d-flex row">
                <h5 class="card-title fs-3 fw-bold"> ${arreglo[i].name} </h5>
                <h5 class="card-title fs-6"> Characters: ${arreglo[i].characters.length} </h5>
              <div class="d-flex justify-content-center">
                <a href="../z-pages/detailsClans.html?id=${arreglo[i].id}" class="btn w-50 mb-2 " id="detailsB">Characters</a>  
            </div>
                <img class="js ms-auto pb-3 " src="../../Imgs/boton.png" alt=""  data-anijs="if: mouseover, on: .js,
                do: wobble animated"
                </div> `
            contenedorClanes.appendChild(tarjeta)
        }
    }
    else {
        let tarjeta = document.createElement('div')
        tarjeta.className = "card tarjetaNot col-md-4"
        tarjeta.id = `tarjetaTrans`

        tarjeta.innerHTML = `
         <img src="../../Imgs/triste.webp " class="card-img-top foto h-50 p-2">
        <div class="card-body text-center  d-flex row">
                <h5 class="card-title mt-3 fw-bold"> Not results found :(. Try it again with other characters. </h5>
                  
            </div> `
        contenedorClanes.appendChild(tarjeta)
    }

}

document.getElementById("busqueda").addEventListener('keyup', e => {

    let filtradosTexto = filtroDeTexto(clans)
    let check = document.getElementById("one")
    let check1 = document.getElementById("two")
    let check2 = document.getElementById("three")

    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let nuevo = recorrer(filtradosTexto)
        pintarClans(nuevo)
    }
    else if (checksConPalomita.length == 3){
        pintarClans(filtradosTexto)
    }
    else if (checksConPalomita == 0){
        pintarClans(filtradosTexto) 
    }
    else{
        if (check.checked){
            let filtrar = one(filtradosTexto)
            pintarClans(filtrar)
        }
        else if (check1.checked){
            let filtrar = two(filtradosTexto)
            pintarClans(filtrar)
        }
        else if (check2.checked){
            let filtrar = three(filtradosTexto)
            pintarClans(filtrar)
        }
    }
    
})

function filtroDeTexto(a) {
    
    let buscadorHome = document.getElementById("busqueda").value.toLowerCase()
    let filtrado = a.filter(clan =>
        clan.name.toLowerCase().includes(buscadorHome))
    return filtrado;
}

// Categorías filtradas

document.getElementById("one").addEventListener('change', e => {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let filtrados = filtroDeTexto(clans)
        let nuevo = recorrer(filtrados)
        pintarClans(nuevo)
    }
    else if (checksConPalomita.length == 3){
        let filtrados = filtroDeTexto(clans)
        pintarClans(filtrados)
    }
    else{
        let filtrados = filtroDeTexto(clans)
        let nuevos = one(filtrados)
        pintarClans(nuevos) 
    }
         
})

document.getElementById("two").addEventListener('change', e => {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let filtrados = filtroDeTexto(clans)
        let nuevo = recorrer(filtrados)
        pintarClans(nuevo)
    }
    else if (checksConPalomita.length == 3){
        let filtrados = filtroDeTexto(clans)
        pintarClans(filtrados)
    }
    else{
        let filtrados = filtroDeTexto(clans)
        let nuevos = two(filtrados)
        pintarClans(nuevos) 
    }
})

document.getElementById("three").addEventListener('change', e => {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let filtrados = filtroDeTexto(clans)
        let nuevo = recorrer(filtrados)
        pintarClans(nuevo)
    }
    else if (checksConPalomita.length == 3){
        let filtrados = filtroDeTexto(clans)
        pintarClans(filtrados)
    }
    else{
        let filtrados = filtroDeTexto(clans)
        let nuevos = three(filtrados)
        pintarClans(nuevos) 
    }
})

function recorrer(array) {
    let check = document.getElementById("one")
    let check1 = document.getElementById("two")
    let check2 = document.getElementById("three")

    if ((check.checked)&&(check1.checked)){
        let devolver = array.filter(villa => villa.characters.length < check1.value)
        return devolver
    }
    else if ((check.checked)&&(check2.checked)){
        let devolver = array.filter(villa => (villa.characters.length < 6) || (villa.characters.length > 10))
        return devolver
    }
    else if ((check1.checked)&&(check2.checked)){
        let devolver = array.filter(villa => (villa.characters.length >= 6))
        return devolver
    }
}

function one(array) {
    let check = document.getElementById("one")
    if (check.checked) {
        let devolver = array.filter(villa => villa.characters.length < check.value)
        return devolver
    }
    else {
        return array
    }
}
function two(array) {
    let check = document.getElementById("two")
    if (check.checked) {
        let devolver = array.filter(villa => (villa.characters.length < check.value) && (villa.characters.length > 5))
        return devolver
    }
    else {
       return array
    }
}
function three(array) {
    let check = document.getElementById("three")
    if (check.checked) {
        let devolver = array.filter(villa => villa.characters.length > check.value)
        return devolver
    }
    else {
        return array
    }
}