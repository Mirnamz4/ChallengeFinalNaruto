let url = "https://narutodb.xyz/api/village?page=1&limit=38"

fetch(url)
    .then(response => response.json())
    .catch(e => console.log(e))


export let arregloCompleto = await fetch(url)
export let data = await arregloCompleto.json()
export let villas = data.villages

export function pintarVillas(arreglo) {
    let contenedorVillages = document.getElementById("contenedorVillages")
    contenedorVillages.innerHTML = ""

    if (arreglo.length > 0) {
        for (let i = 0; i < arreglo.length; i++) {
            let tarjeta = document.createElement('div')
            tarjeta.className = "card tarjetaVilla col-md-4"
            tarjeta.id = `tarjetaTrans`

            tarjeta.innerHTML = `
            <img src="../../Imgs/Villas/${arreglo[i].id}.png " class="card-img-top foto h-50 p-2">
        
            <div class="card-body text-center d-flex row">
                <h5 class="card-title fw-bold"> ${arreglo[i].name} </h5>
                <h5 class="card-title fw-bold"> Characters: ${arreglo[i].characters.length} </h5>
              <div class="d-flex justify-content-center">
                <a href="./detailsVillages.html?id=${arreglo[i].id}" class="btn w-50 mb-2 " id="detailsB">Characters</a>  
            </div>
                <img class="js ms-auto mb-4 " src="../../Imgs/boton.png" alt=""  data-anijs="if: mouseover, on: .js,
                do: wobble animated"
                </div> `
            contenedorVillages.appendChild(tarjeta)
        }
    }
    else {
        let tarjeta = document.createElement('div')
        tarjeta.className = "card tarjetaVilla col-md-4"
        tarjeta.id = `tarjetaTrans`

        tarjeta.innerHTML = `
         <img src="../../Imgs/triste.webp " class="card-img-top foto h-50 p-2">
        <div class="card-body text-center d-flex row">
                <h5 class="card-title mt-3 fw-bold"> Not results found :(. Try it again with other characters. </h5>
                  
            </div> `
        contenedorVillages.appendChild(tarjeta)
    }

}

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