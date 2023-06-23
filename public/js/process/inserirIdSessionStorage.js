export const inserirIdSessionStorage = () => {
    let cards = document.querySelectorAll(".card")

    cards.forEach((card) => {
        card.lastElementChild.addEventListener("click", () => {    
            sessionStorage.setItem("idAnimal", card.lastElementChild.getAttribute("idAnimal"))
            window.location.href = "../public/adocao.html"
        })
    })
}