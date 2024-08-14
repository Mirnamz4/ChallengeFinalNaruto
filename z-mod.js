export function identifyCategories(characters) {
    let categories = []
    for (let char of characters) {
        let category = char.personal.affiliation? char.personal.affiliation : "Without Affiliation"
        if (Array.isArray(category)) {
            categories.push(...category)
        } else {
            categories.push(category)
        }
    }
    let categoriesClean = [... new Set(categories)]
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

export function createCard(pers) {
    let persCardGrid = document.createElement("div")
    persCardGrid.className = "px-1 py-2 col-sm-12 col-md-6 col-lg-3"

    let persCard = document.createElement("div")
    persCard.className = "card"
    persCardGrid.appendChild(persCard)

    let image = document.createElement("img")
    image.src = pers.images[0]
    image.className = "card-img-top card-img-size"
    persCard.appendChild(image)

    let bodyCard = document.createElement("div")
    bodyCard.className = "card-body py-2"
    persCard.appendChild(bodyCard)

    let name = document.createElement("h5")
    name.textContent = pers.name
    name.className = "card-title mb-1"
    bodyCard.appendChild(name)

    let affiliation = document.createElement("p")
    affiliation.textContent = pers.affiliation.join(" - ")
    affiliation.className = "card-text card-desc-size p-0 mb-1 lh-sm"
    bodyCard.appendChild(description)

    let details = document.createElement("div")
    details.className = "details d-flex justify-content-between"
    bodyCard.appendChild(details)

    let price = document.createElement("p")
    price.textContent = "Price: $ " + event.price
    price.className = "card-text my-2 fs-6 fw-semibold"
    details.appendChild(price)

    let buttonDetails = document.createElement("a")
    buttonDetails.href = "./details.html?id=" + event._id
    buttonDetails.innerHTML = "Details"
    buttonDetails.className = "btn costum-btn"
    details.appendChild(buttonDetails)

    return persCardGrid
}

export function paintCards(events, container) {
    container.innerHTML = ""
    if (events.length > 0) {
        for (let event of events) {
            let eventCard = createCard(event)
            container.appendChild(eventCard)
        }
    } else {
        let noResults = document.createElement("p")
        noResults.className = "container text-center fs-4 text-body-secondary"
        noResults.textContent = "No results found"
        container.appendChild(noResults)
    }
}

export function filterCategory(events) {
    let checkBoxesChecked = document.querySelectorAll('input[type = "checkbox"]:checked')
    let categoriesChecked = [...checkBoxesChecked].map(category => category.value)
    if (categoriesChecked.length > 0) {
        let eventsFilter = []
        for (let category of categoriesChecked) {
            let eventsByCategory = events.filter(event => event.category.includes(category))
            eventsFilter = eventsFilter.concat(eventsByCategory)
        }
        return eventsFilter
    } else {
        return events
    }
}

export function filterText(events) {
    let text = document.getElementById("textSearch").value.toLowerCase()
    let eventsFilter = events.filter(event => event.name.toLowerCase().includes(text)
        || event.description.toLowerCase().includes(text))
    return eventsFilter
}