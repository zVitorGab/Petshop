var titulo = document.querySelector(".titulo")
var descricao = document.querySelector(".descricao")
var imagem = document.querySelector(".imagem")

var listaCards = JSON.parse(localStorage.getItem('animais'))

export function gerarCardSelecionado(){
    listaCards.forEach((card) => {
        if(card.id == sessionStorage.getItem("idAnimal")){
            titulo.innerHTML = card.titulo
            descricao.innerHTML = card.descricao
            imagem.setAttribute('src', card.imgURL)
        }
    })
}