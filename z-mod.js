export function identifyCategories(characters) {
    let categories = []
    for (let character of characters) {
        let category = character.personal.affiliation ? character.personal.affiliation : "Without Affiliation"
        if (Array.isArray(category)) {
            categories.push(...category)
        } else {
            categories.push(category)
        }
    }
    let categoriesClean = [... new Set(categories)]
    categoriesClean = categoriesClean.map(category =>
        category.includes("Kaneki") ? "Kaneki Corporation"
            : category.includes("Haze") ? "Land of Haze"
                : category.includes("Calm Seas") ? "Land of Calm Seas" : category)
    return categoriesClean
}

export function createCheckBox(category) {
    let checkBox = document.createElement("div")
    checkBox.className = "form-check col-sm-4 col-md-3"

    let input = document.createElement("input")
    input.className = "form-check-input"
    input.type = "checkbox"
    input.id = category.replace(" ", "-")
    input.value = category
    checkBox.appendChild(input)

    let label = document.createElement("label")
    label.className = "form-check-label"
    label.setAttribute('for', category.replace(" ", "-"))
    label.textContent = category
    checkBox.appendChild(label)

    return checkBox
}

export function paintCheckBox(categories, container) {
    for (let category of categories) {
        let checkBox = createCheckBox(category)
        container.appendChild(checkBox)
    }
}

export function createCard(character) {
    let characterCardGrid = document.createElement("div")
    characterCardGrid.className = "px-1 py-2 col-sm-6 col-md-3 col-lg-2"

    let characterCard = document.createElement("div")
    characterCard.className = "card"
    characterCardGrid.appendChild(characterCard)

    let image = document.createElement("img")
    image.src = character.images[0]
    image.className = "card-img-top card-img-size"
    characterCard.appendChild(image)

    let bodyCard = document.createElement("div")
    bodyCard.className = "card-body py-2"
    characterCard.appendChild(bodyCard)

    let name = document.createElement("h5")
    name.textContent = character.name
    name.className = "card-title mb-1"
    bodyCard.appendChild(name)

    let affiliation = document.createElement("p")
    affiliation.textContent = "Affiliation: "
    affiliation.className = "card-text card-desc-size p-0 mb-1 lh-sm"
    bodyCard.appendChild(affiliation)

    let details = document.createElement("div")
    details.className = "details d-flex flex-column"
    bodyCard.appendChild(details)

    let buttonDetails = document.createElement("a")
    buttonDetails.href = "./details.html?id=" + character.id
    buttonDetails.innerHTML = "Details"
    buttonDetails.className = "btn-2 align-self-end"
    details.appendChild(buttonDetails)

    return characterCardGrid
}

export function paintCards(characters, container) {
    container.innerHTML = ""
    if (characters.length > 0) {
        for (let character of characters) {
            let characterCard = createCard(character)
            container.appendChild(characterCard)
        }
    } else {
        let noResults = document.createElement("p")
        noResults.className = "container text-center fs-4 text-body-secondary"
        noResults.textContent = "No results found"
        container.appendChild(noResults)
    }
}

export function filterCategory(characters) {
    let checkBoxesChecked = document.querySelectorAll('input[type = "checkbox"]:checked')
    let categoriesChecked = [...checkBoxesChecked].map(category => category.value)
    if (categoriesChecked.length > 0) {
        let charactersFilter = []
        for (let category of categoriesChecked) {
            let charactersByCategory = characters.filter(character => 
                Array.isArray(character.personal.affiliation)? character.personal.affiliation.includes(category) 
                : character.personal.affiliation == category)
            charactersFilter = charactersFilter.concat(charactersByCategory)
        }
        return charactersFilter
    } else {
        return characters
    }
}

export function filterText(characters) {
    let text = document.getElementById("textSearch").value.toLowerCase()
    let charactersFilter = characters.filter(character => character.name.toLowerCase().includes(text))
    return charactersFilter
}