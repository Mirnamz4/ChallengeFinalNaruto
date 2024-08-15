

const urlS = new URLSearchParams(window.location.search);
let idMagik = urlS.get('id')

console.log(idMagik);


fetch("https://narutodb.xyz/api/clan/" + idMagik)
    .then(response => response.json())
    .then(data => {
        let contenedorc = document.getElementById("charactersVillas")

        for (let i = 0; i < data.characters.length; i++) {
            
        let nombre = document.createElement('div')
        nombre.className = "d-flex tarjetaClan justify-content-center row pb-2"
        nombre.innerHTML = `
        <img src="${data.characters[i].images[0] || '../Imgs/incognito.jpg'}  " class="card-img-top h-75 p-2">

        <h5 class="card-title text-center fs-4 fw-bolder"> ${data.characters[i].name} </h5>`
        contenedorc.appendChild(nombre)
        }
    }).catch(e => console.log(e)    )

  