import * as elemento from "../utils/elementosAdocao.js"
import { inputsValidosAdocao } from "../validation/checkInputsAdocao.js"

let divErro = document.querySelector(".divErro")
let fechaErro = document.querySelector("#fechaErro")
let descricaoErro = document.querySelector("#descricaoErro")


export function gerarErroAdocao(){
    let inputsInvalidos = inputsValidosAdocao()

    descricaoErro.innerHTML = ""

    if(inputsInvalidos.nome){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Nome inválido!<br>"
    }
    if(inputsInvalidos.telefone){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Telefone inválido!<br>"
    }
    if(inputsInvalidos.email){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Email inválido!<br>"
    }
    if(inputsInvalidos.residencia){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Residência inválida!<br>"
    }
    if(inputsInvalidos.radiobuttons){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Renda inválida!<br>"
    }
    if(inputsInvalidos.intencao){
        divErro.classList.remove("erroDisabled")
        descricaoErro.innerHTML += "Intenção inválida!<br>"
    }

    fechaErro.addEventListener("click", () => {
        divErro.classList.add("erroDisabled")

        elemento.nome.classList.remove("erro")
        elemento.nome.setAttribute('placeholder', "Nome")
        elemento.telefone.classList.remove("erro")
        elemento.telefone.setAttribute('placeholder', "Telefone")
        elemento.email.classList.remove("erro")
        elemento.email.setAttribute('placeholder', "E-mail")
        elemento.residencia.classList.remove("erro")
        elemento.intencao.classList.remove("erro")
        elemento.intencao.setAttribute('placeholder', "Intenção")

    })

}