let button = document.querySelector(".btTema")

export const alterarTema = () => {
    button.addEventListener("click", () => {
        let body = document.querySelector("body")
        let header = document.querySelector("header")
        let footer = document.querySelector("footer")
        let cards = document.querySelectorAll(".card")
    
        if(button.checked){
            body.classList.add("body-dark")
            header.classList.add("header_footer-dark")
            footer.classList.add("header_footer-dark")
    
            cards.forEach((card) => {
                card.classList.add("card-dark")
            })
        }
        else{
            body.classList.remove("body-dark")
            header.classList.remove("header_footer-dark")
            footer.classList.remove("header_footer-dark")
    
            cards.forEach((card) => {
                card.classList.remove("card-dark")
            })
        }
        
    })
}