import { criarCards } from "./process/criarCards.js"

window.onload = () => {

    criarCards()
    let cards = document.querySelectorAll(".card")

    cards.forEach((card) => {
        card.lastElementChild.addEventListener("click", (event) => {
            event.preventDefault()

            sessionStorage.setItem("idAnimal", card.lastElementChild.getAttribute("idAnimal"))
            window.location.href = "../public/adocao.html"
        })
    })
}


