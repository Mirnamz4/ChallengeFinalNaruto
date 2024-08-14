

const urlS = new URLSearchParams(window.location.search);
let idMagik = urlS.get('id')
let contenedorc = document.getElementById("contenedorDetalleVilla")
let imagend = document.createElement('div')
imagend.innerHTML = `
<img src="../../Imgs/Villas/${idMagik}.png " class="card-img-top h-50 p-2"> `
contenedorc.appendChild(imagend)

fetch("https://narutodb.xyz/api/village/" + idMagik)
    .then(response => response.json())
    .then(data => {
        let nombre = document.createElement('div')
        nombre.innerHTML = `
<h5 class="card-title text-center fs-2 tituloVi fw-bold"> ${data.name} </h5>`
        contenedorc.appendChild(nombre)
    })


obtenerPersonajes(idMagik)

function obtenerPersonajes(number) {
    fetch("https://narutodb.xyz/api/village/" + number)
        .then(response => response.json())
        .then(data => {
            pintarPersonajesVillas(data.characters);
        })
        .catch(e => console.log(e))
}


function pintarPersonajesVillas(array) {
    if (array.length > 0) {
        let contenedorPerson = document.getElementById("charactersVillas")
        for (let i = 0; i < array.length; i++) {

            fetch("https://narutodb.xyz/api/character/" + array[i].id)
                .then(response => response.json())
                .then(data => {
                    let tarjeta = document.createElement('div')
                    tarjeta.className = "card detai col-md-4"
                    tarjeta.innerHTML = `
<img src="${data.images[0]|| '../../Imgs/incognito.jpg' }  " class="card-img-top h-50 p-2">

<div class="card-body text-center d-flex row">
<h5 class="card-title fw-bold"> ${data.name} </h5>
</div>`
                    contenedorPerson.appendChild(tarjeta)
                })
        }
    }
    else {
        let contenedorPerson = document.getElementById("charactersVillas")
        let tarjeta = document.createElement('div')
        tarjeta.className = "card col-md-4 fw-bolder text-center"
        tarjeta.innerHTML = `Characters Not Found :( `
        contenedorPerson.appendChild(tarjeta)
    }
}


// arregloEventos.forEach(element => {
//     if (element._id == idArreglo) {
//         pintarVillaCharacters(element)
//     }
// })

// function pintarVillaCharacters(number) {
//     fetch("https://narutodb.xyz/api/village/" + number)
//         .then(response => response.json())
//         .then(data => {

//             let contenedor = document.getElementById("contenedorDetalleVilla")
//             let tarjeta = document.createElement('div')
//             tarjeta.className = "card tarjetaVillaDetail col-md-4"
//             tarjeta.id = `tarjetaTrans`

//             tarjeta.innerHTML = `
//     <img src="../../Imgs/Villas/${i}.png " class="card-img-top h-50 p-2">

//     <div class="card-body text-center d-flex row">
//         <h5 class="card-title fw-bold"> ${data.name} </h5>
//         <h5 class="card-title fw-bold"> Characters: ${data.characters.length} </h5>
//       <div class="d-flex justify-content-between align-self-end">
//         <a href="./detailsVillages.html?id=${data.id}" class="btn btn-primary ms-auto" id="detailsB">Characters</a>
//     </div>
//         </div> `
//             contenedorVillages.appendChild(tarjeta)
//         })

//         .catch(e => console.log(e))
// }
