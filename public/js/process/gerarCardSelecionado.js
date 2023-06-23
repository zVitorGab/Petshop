import { listaPosts } from "./listaPosts.js"

var titulo = document.querySelector(".titulo")
var descricao = document.querySelector(".descricao")
var imagem = document.querySelector(".imagem")

export function gerarCardSelecionado(){
    listaPosts.forEach((card) => {
        if(card.id == sessionStorage.getItem("idAnimal")){
            titulo.innerHTML = card.titulo
            descricao.innerHTML = card.descricao
            imagem.setAttribute('src', card.imgURL)
        }
    })
}