
for (let i = 1; i < 37; i++) {

    fetch('https://narutodb.xyz/api/village/' + i)
        .then(response => response.json())
        .then(data => {
            let carrucel = document.getElementById("carrucelVillages")
            let villa = document.createElement('div')
            villa.classList = "carousel-item"
            villa.innerHTML = `
      <img src="../Imgs/Villas/${i}.png " class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${data.name} </h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>`
            carrucel.appendChild(villa)
        })

        .catch(e => console.log(e))
}

let urlKara = "https://narutodb.xyz/api/kara"