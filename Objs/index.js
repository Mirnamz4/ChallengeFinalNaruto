import {change} from "../Modules/Modules.js"

for (let i = 1; i < 37; i++) {

    fetch('https://narutodb.xyz/api/village/' + i)
        .then(response => response.json())
        .then(data => {
            let carrucel = document.getElementById("carrucelVillages")
            let villa = document.createElement('div')
            villa.classList = "carousel-item villa"
            villa.innerHTML = `
      <img src="../Imgs/Villas/${i}.png " class="d-block w-100" alt="...">
        <h5 class="villaH">${data.name} </h5>
        `
            carrucel.appendChild(villa)
        })

        .catch(e => console.log(e))
}

change()

document.getElementById("contenedorPersonajes").addEventListener('click', () => change())

