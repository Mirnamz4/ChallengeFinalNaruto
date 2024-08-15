let url = "https://narutodb.xyz/api/village?page=1&limit=38"

fetch(url)
    .then(response => response.json())
    .catch(e => console.log(e))


export let arregloCompleto = await fetch(url)
export let data = await arregloCompleto.json()
export let villas = data.villages

let url2 = "https://narutodb.xyz/api/clan?page=1&limit=32"
fetch(url2)
    .then(response => response.json())
    .catch(e => console.log(e))

export let arregloCompleto2 = await fetch(url2)
export let data2 = await arregloCompleto2.json()
export let clans = data2.clans



export function change() {

    let limpiar = document.getElementById("contenedorPersonajes")
    limpiar.innerHTML = ''
    for (let i = 0; i < 25; i++) {

        let numberMagic = parseInt(generateRandom(1430))
        function generateRandom(max) {
            return Math.random() * max;
        }
        fetch("https://narutodb.xyz/api/character/" + numberMagic)
            .then(response => response.json())
            .then(data => {


                let contenedorPersonajes = document.getElementById("contenedorPersonajes")
                let tarjeta = document.createElement('div')
                tarjeta.className = "card tarjetaCharacter"
                tarjeta.id = `tarjetaTrans`

                tarjeta.innerHTML = ` 
                <img src="${data.images[0] || '../Imgs/incognito.jpg'}" class="card-img-top p-2">`

                contenedorPersonajes.appendChild(tarjeta)
            })
    }
}

export function filtroDeTexto(a) {

    let buscadorHome = document.getElementById("busqueda").value.toLowerCase()
    let filtrado = a.filter(nota =>
        nota.name.toLowerCase().includes(buscadorHome))
    return filtrado;
}

export function filtroChecks(array) {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    let arregloFilter = array.filter(x => checksConPalomita.includes(x.category))
    return arregloFilter;
}

export function pintarC(array) {

}