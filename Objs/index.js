
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

for (let i = 0; i < 57; i++) {

    fetch('https://narutodb.xyz/api/clan/' + i)
        .then(response => response.json())
        .then(data => {
            let clansContenedor = document.getElementById("contenedorTarjetas")
            let clan = document.createElement('div')
            clan.className = "card tarjetaTamaño col-md-4"
            clan.innerHTML = `
      <div class="card-body text-center d-flex row">
        <h5>Clan: ${data.name} </h5>
        <h5>Characters: ${data.characters.length} </h5>
        <a href="./index.html"><img class="starVacia" src="./Imgs/starVacia.png" alt=""></a>
        <button type="button" class="btn btn-secondary">Details</button>
      </div>`
            clansContenedor.appendChild(clan)
        })

        .catch(e => console.log(e))
}

change()


function change() {

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
                <img src="${data.images[0]}" class="card-img-top p-2">
  
`
                contenedorPersonajes.appendChild(tarjeta)
            })
    }
}
document.getElementById("contenedorPersonajes").addEventListener('click', () => change())

kara()

function kara() {

    for (let i = 0; i < 19; i++) {

        fetch("https://narutodb.xyz/api/kara")
            .then(response => response.json())
            .then(data => {

                let contenedorKara = document.getElementById("contenedorKara")
                let tarjeta = document.createElement('div')
                tarjeta.className = "card tarjetaTamañoK col-md-4"
                tarjeta.id = `tarjetaTrans`

                tarjeta.innerHTML = `
        <img src="${data.kara[i].images[0]}" class="card-img-top h-50 p-2">
    <div class="card-body text-center d-flex row">
        <h5 class="card-title fw-bold"> ${data.kara[i].name} </h5>
    </div> `
                contenedorKara.appendChild(tarjeta)
            })
    }
}
