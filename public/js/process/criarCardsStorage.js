export const criarCardsStorage = () => {
    let main = document.querySelector(".main")
    let listaCards = JSON.parse(localStorage.getItem('animais'))

    listaCards.forEach((post) => {

        let card =
        `
            <div class="card col-12 col-md-6 col-lg-4" data-aos="zoom-in">
                <img src="${post.imgURL}">
                <h3 class="titulo">${post.titulo}</h3>
                <p class="descricao">${post.descricao}</p>
                <button class="btCard" idAnimal=${post.id}>Entre em contato</button>
            </div>
        `
        main.innerHTML += card
    })
}