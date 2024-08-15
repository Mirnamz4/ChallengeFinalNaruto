import * as zir from "./z-mod.js";

let url = "https://narutodb.xyz/api/character?page=1&limit=100"

fetch(url)
    .then(resp => resp.json())
    .then(response => {

        let data = response
        console.log(data);

        let characters = data.characters

        let categories = zir.identifyCategories(characters)
        let checkBoxContainer = document.getElementById("checkBoxContainer")
        let cardContainer = document.getElementById("cardContainer")

        zir.paintCheckBox(categories, checkBoxContainer)
        zir.paintCards(characters, cardContainer)

        let checkBoxes = document.querySelectorAll('input[type = "checkbox"]')
        let textSearch = document.getElementById("textSearch")

        checkBoxes.forEach(checkBox => {
            checkBox.addEventListener("change", () => {
                let charactersFilter = zir.filterCategory(characters)
                charactersFilter = zir.filterText(charactersFilter)
                zir.paintCards(charactersFilter, cardContainer)
            })
        })

        textSearch.addEventListener("keyup", () => {
            let charactersFilter = zir.filterText(characters)
            charactersFilter = zir.filterCategory(charactersFilter)
            zir.paintCards(charactersFilter, cardContainer)
        })
    })