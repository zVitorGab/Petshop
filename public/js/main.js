const listaPosts = [
    {
        titulo: "Patinho",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, non. Voluptatibus neque sequi obcaecati unde, voluptatum error adipisci laboriosam molestiae sit deleniti veniam in ea, ratione quas dolorum, omnis assumenda?!",
        imgURL: "./img/img1.jpg"
    },
    {
        titulo: "Cachorrinho",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, non. Voluptatibus neque sequi obcaecati unde, voluptatum error adipisci laboriosam molestiae sit deleniti veniam in ea, ratione quas dolorum, omnis assumenda?!",
        imgURL: "./img/img2.jpg"
    },
    {
        titulo: "Rinocerontinho",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, non. Voluptatibus neque sequi obcaecati unde, voluptatum error adipisci laboriosam molestiae sit deleniti veniam in ea, ratione quas dolorum, omnis assumenda?!",
        imgURL: "./img/img3.jpg"
    }
]

let main = document.querySelector(".main")

const criarPost = () => {
    listaPosts.forEach((post) => {

        let card =
        `
            <div class="card col-12 col-md-6 col-lg-4">
                <img src="${post.imgURL}">
                <h3 class="titulo">${post.titulo}</h3>
                <p class="descricao">${post.descricao}</p>
                <button>Entre em contato</button>
            </div>
        `
        main.innerHTML += card
    })
}
let button = document.querySelector(".btTema")

window.onload = () => {
    criarPost()

    let cards = document.querySelectorAll(".card")
    button.addEventListener("click", () => {

        if(button.checked){
            cards.forEach((card) => {
                card.classList.add("card-dark")
            })
        }else{
            cards.forEach((card) => {
                card.classList.remove("card-dark")
            })
        }
       
    })
    
}

button.addEventListener("click", () => {
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    let footer = document.querySelector("footer")

    if(button.checked){
        body.classList.add("body-dark")
        header.classList.add("header_footer-dark")
        footer.classList.add("header_footer-dark")
    }
    else{
        body.classList.remove("body-dark")
        header.classList.remove("header_footer-dark")
        footer.classList.remove("header_footer-dark")
    }
    
})

