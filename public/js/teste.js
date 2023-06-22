import { listaPosts } from "./utils/listaPosts.js"

var titulo = document.querySelector(".titulo")
var descricao = document.querySelector(".descricao")
var imagem = document.querySelector(".imagem")

listaPosts.forEach((get) => {
    if(get.id == sessionStorage.getItem("idAnimal")){
        titulo.innerHTML = get.titulo
        descricao.innerHTML = get.descricao
        imagem.setAttribute('src', get.imgURL)
    }
})