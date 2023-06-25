import { gerarErroCadastro } from "../process/gerarErroCadastro.js"
import * as elemento from "../utils/elementosCadastro.js"

export const inputsInvalidosCadastro = () => {
    let inputsInvalidos = {}

    if(elemento.titulo.value.trim() == ""){
        inputsInvalidos.titulo = true 
    }
    if(elemento.descricao.value.trim() ==  ""){
        inputsInvalidos.descricao = true
    }
    if(elemento.imgURL.value.trim() ==  ""){
        inputsInvalidos.imgURL = true
    }

    return inputsInvalidos
}

export const checkInputsCadastro = () => {
    let control = true

    if(elemento.titulo.value.trim() ==  ""){
        elemento.titulo.classList.add("erro")
        elemento.titulo.setAttribute('placeholder', "Titulo inválido!")
        control = false
    }
    if(elemento.descricao.value.trim() == ""){
        elemento.descricao.classList.add("erro")
        elemento.descricao.setAttribute('placeholder', "Descrição inválida!")
        control = false
    }
    if(elemento.imgURL.value.trim() == ""){
        elemento.imgURL.classList.add("erro")
        elemento.imgURL.setAttribute('placeholder', "URL inválida!")
        control = false
    }
    gerarErroCadastro()
    return control
}