const apiUrl = 'https://narutodb.xyz/api/kekkei-genkai?page=1&limit=39';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayCards(data))
    .catch(error => console.error('Error:', error));

function displayCards(data) {
    const seenCharacters = new Set();
    const container = document.querySelector('#cards-container');
    container.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevas tarjetas

    data.kekkeigenkai.forEach((kekkei, index) => {
        if (kekkei.characters && kekkei.characters.length > 0) {
            kekkei.characters.forEach(character => {
                if (!seenCharacters.has(character.name)) {
                    seenCharacters.add(character.name);

                    const card = document.createElement('div');
                    card.className = 'card';
                    const firstJutsu = character.jutsu && character.jutsu.length > 0 ? character.jutsu[0] : 'Unknown';
                    const imageUrl = character.images && character.images[0] ? character.images[0] : 'default-image-url.jpg';

                    // Determinar el color del footer basado en el kekkei genkai
                    const footerColor = getKekkeiGenkaiColor(index + 1);

                    // Creación de la estructura de la tarjeta
                    card.innerHTML = `
                        <img src="${imageUrl}" alt="${character.name}">
                        <div class="card-footer" style="background-color: ${footerColor}">
                            <div class="title">${character.name || 'Unknown'}</div>
                            <div class="debut">${character.debut ? character.debut.anime || character.debut.manga || character.debut.game || 'Unknown' : 'Unknown'}</div>
                        </div>
                    `;

                    container.appendChild(card);
                }
            });
        }
    });


function getKekkeiGenkaiColor(index) {
    // Retornar el color basado en el índice del kekkei genkai
    switch (index) {
        case 1: return '#ffcccc';
        case 2: return '#ccffcc';
        // Añadir más colores para otros kekkei genkai
        default: return '#f5f5f5'; // Color por defecto
    }
}

}
