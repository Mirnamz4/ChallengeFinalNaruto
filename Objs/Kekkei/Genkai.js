const apiUrl = 'https://narutodb.xyz/api/kekkei-genkai?page=1&limit=39';
let kekkeiData = [];

// Cargar los datos de la API y configurar los filtros
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        kekkeiData = data.kekkeigenkai;
        setupFilter();
        setupSearch();  
        displayCards(); 
    })
    .catch(error => console.error('Error:', error));

// Función para mostrar tarjetas basadas en el filtro
function displayCards(filterId = '0', searchQuery = '') {
    const seenCharacters = new Set();
    const container = document.querySelector('#cards-container');
    container.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevas tarjetas

    kekkeiData.forEach((kekkei, index) => {
        const kekkeiId = (index + 1).toString();

        // Mostrar todas las tarjetas si el filtro es '0' o el ID del kekkei genkai coincide con el filtro
        if (filterId === '0' || filterId === kekkeiId) {
            if (kekkei.characters && kekkei.characters.length > 0) {
                kekkei.characters.forEach(character => {
                    // Filtrar por nombre y kekkei genkai
                    if (!seenCharacters.has(character.name) &&
                        character.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                        seenCharacters.add(character.name);

                        const card = document.createElement('div');
                        card.className = 'card col-12 col-md-6 col-lg-4';
                        const firstJutsu = character.jutsu && character.jutsu.length > 0 ? character.jutsu[0] : 'Unknown';
                        const imageUrl = character.images && character.images[0] ? character.images[0] : './1348162.jpeg';

                        // Determinar el color del footer basado en el kekkei genkai
                        const footerColor = getKekkeiGenkaiColor(kekkeiId);

                       
                        card.innerHTML = `
                            <img src="${imageUrl}" alt="${character.name}">
                            <div class="card-footer" style="background-color: ${footerColor}">
                                <div class="title">${character.name || 'Unknown'}</div>
                                <div class="debut">${character.debut ? character.debut.anime || character.debut.manga || character.debut.game || 'Naruto Shippūden' : 'Naruto Shippūden'}</div>
                            </div>
                        `;

                        container.appendChild(card);
                    }
                });
            }
        }
    });
}

// Función `<select>`
function setupFilter() {
    const selectElement = document.getElementById('inputGroupSelect01');
    selectElement.addEventListener('change', () => {
        const selectedValue = selectElement.value;
        const searchQuery = document.querySelector('.input').value;
        displayCards(selectedValue, searchQuery); 
    });
}

// Función búsqueda por texto
function setupSearch() {
    const searchInput = document.querySelector('.input');
    searchInput.addEventListener('keyup', () => {
        const searchQuery = searchInput.value;
        const selectedValue = document.getElementById('inputGroupSelect01').value;
        displayCards(selectedValue, searchQuery); // Mostrar las tarjetas filtradas por búsqueda
    });
}

// Función para obtener el color del footer 
function getKekkeiGenkaiColor(id) {
    switch (id) {
        case '1': return '#ffcccc';
        case '2': return '#ccffcc';
        case '3': return '#ccccff';
        case '4': return '#ffffcc';
        case '5': return '#ffccff';
       
        default: return '#f5f5f5'; 
    }
}




    const apiUrl2 = 'https://narutodb.xyz/api/tailed-beast'; 

    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => displayTailedBeastCards(data))
        .catch(error => console.error('Error:', error));
    
    function displayTailedBeastCards(data) {
        const container = document.getElementById('tailed-beasts-container');
        container.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevas tarjetas
    console.log(data);
    
        data.tailedBeasts.forEach(beast => {
            const card = document.createElement('div');
            card.className = 'card';
            const imageUrl2 = beast.images && beast.images[0] ? beast.images[0] : './1248760.png'; 
    
            
            card.innerHTML = `
                <img src="${imageUrl2}" alt="${beast.name}">
                <div class="card-footer">
                    <div class="title">${beast.name || 'Unknown'}</div>
                    <div class="debut">${beast.uniqueTraits|| 'Secret skill'}</div>
                </div>
            `;
    
            container.appendChild(card);
        });
    }
    





