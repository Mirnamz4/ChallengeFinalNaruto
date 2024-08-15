
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://narutodb.xyz/api/kekkei-genkai?page=1&limit=39';

   
    function fetchData() {
        return fetch(apiUrl)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching data:', error);
                return { kekkeigenkai: [] }; // Devolver un objeto vacío en caso de error
            });
    }

    // Función para actualizar la tabla 
    function updateTable(data) {
        const tableBody = document.querySelector('#kekkei-stats tbody');
        tableBody.innerHTML = ''; // Limpiar el contenido previo

        // Objeto para almacenar el conteo de personajes y jutsus por Kekkei Genkai
        const kekkeiGenkaiStats = {};

        //  contar personajes y jutsus
        data.kekkeigenkai.forEach(item => {
            const kekkei = item.name || 'Unknown'; 
            const characters = item.characters || [];
            const jutsusCount = characters.reduce((count, character) => count + (character.jutsu ? character.jutsu.length : 0), 0);

            if (!kekkeiGenkaiStats[kekkei]) {
                kekkeiGenkaiStats[kekkei] = { characters: 0, jutsus: 0 };
            }

            kekkeiGenkaiStats[kekkei].characters += characters.length;
            kekkeiGenkaiStats[kekkei].jutsus += jutsusCount;
        });

        // Poner filas en la tabla
        for (const [kekkei, stats] of Object.entries(kekkeiGenkaiStats)) {
            const row = `
                <tr>
                    <td>${kekkei}</td>
                    <td>${stats.characters}</td>
                    <td>${stats.jutsus}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        }
    }

    // Ejecutar 
    fetchData().then(data => updateTable(data));
});
