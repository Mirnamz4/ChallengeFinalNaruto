export function pintarVillas() {
    for (let i = 0; i < 37; i++) {

        fetch('https://narutodb.xyz/api/village/' + i)
            .then(response => response.json())
            .then(data => {

                let contenedorVillages = document.getElementById("contenedorVillages")
                let tarjeta = document.createElement('div')
                tarjeta.className = "card tarjetaVilla col-md-4"
                tarjeta.id = `tarjetaTrans`

                tarjeta.innerHTML = `
            <img src="../../Imgs/Villas/${i}.png " class="card-img-top foto h-50 p-2">
        
            <div class="card-body text-center d-flex row">
                <h5 class="card-title fw-bold"> ${data.name} </h5>
                <h5 class="card-title fw-bold"> Characters: ${data.characters.length} </h5>
              <div class="d-flex justify-content-center">
                <a href="./detailsVillages.html?id=${data.id}" class="btn w-50 mb-2 " id="detailsB">Characters</a>  
            </div>
    <img class="js ms-auto mb-4 " src="../../Imgs/boton.png" alt=""  data-anijs="if: mouseover, on: .js,
                do: wobble animated"
                </div> `
                contenedorVillages.appendChild(tarjeta)
            })

            .catch(e => console.log(e))
    }
}