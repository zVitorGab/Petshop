import {inputsInvalidosCadastro } from "../validation/checkInputsCadastro.js"
import * as elemento from "../utils/elementosCadastro.js"

let divErro = document.querySelector(".divErro")
let fechaErro = document.querySelector("#fechaErro")
let descricaoErro = document.querySelector("#descricaoErro")

export function gerarErroCadastro(){
    let inputsInvalidos = inputsInvalidosCadastro()
    
    descricaoErro.innerHTML = ""

    if(inputsInvalidos.titulo){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Titulo inválido!<br>"
    }
    if(inputsInvalidos.descricao){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Descrição inválida!<br>"
    }
    if(inputsInvalidos.imgURL){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "URL inválida!<br>"
    }

    fechaErro.addEventListener("click", () => {
        divErro.classList.add("erroDisabled")

        elemento.titulo.classList.remove("erro")
        elemento.titulo.setAttribute('placeholder', "Animal")
        elemento.descricao.classList.remove("erro")
        elemento.descricao.setAttribute('placeholder', "Escreva sobre o animal...")
        elemento.imgURL.classList.remove("erro")
        elemento.imgURL.setAttribute('placeholder', "URL da Imagem")
    })
}