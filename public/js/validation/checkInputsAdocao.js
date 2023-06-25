import { gerarErroAdocao } from "../process/gerarErroAdocao.js"
import * as elemento from "../utils/elementosAdocao.js"

let radioBts = document.querySelectorAll(".radioBts")

export const inputsValidosAdocao = () => {
    let inputsValidos = {}
    let cont = 0

    if(elemento.nome.value.trim() == ""){
        inputsValidos.nome = true      
    }
    if(elemento.telefone.value.trim() == ""){
        inputsValidos.telefone = true      
    }
    if(elemento.email.value.trim() == ""){
        inputsValidos.email = true
    }
    inputsValidos.radiobuttons = false

    radioBts.forEach((btn) => {
        if(!btn.checked){
            cont++
        }
        if(cont == 3) inputsValidos.radiobuttons = true
    })

    if(elemento.residencia.value == "0"){
        inputsValidos.residencia = true
    }
    if(elemento.intencao.value.trim() == ""){
        inputsValidos.intencao = true  
    }

    return inputsValidos

}

export const checkInputsAdocao = () => {
    let control = true
    let cont = 0
    if(elemento.nome.value.trim() == ""){
        elemento.nome.classList.add("erro")
        elemento.nome.setAttribute('placeholder', "Nome inválido!")
        control = false        
    }
    if(elemento.telefone.value.trim() == ""){
        elemento.telefone.classList.add("erro")
        elemento.telefone.setAttribute('placeholder', "Telefone inválido!")
        control = false        
    }
    if(elemento.email.value.trim() == ""){
        elemento.email.classList.add("erro")
        elemento.email.setAttribute('placeholder', "E-mail inválido!")
        control = false
    }

    radioBts.forEach((btn) => {
        if(!btn.checked){
            cont++
        }
        if(cont == 3) control = false
    })
    
    if(elemento.residencia.value == "0"){
        elemento.residencia.classList.add("erro")
        
        control = false
    }

    if(elemento.intencao.value.trim() == ""){
        elemento.intencao.classList.add("erro")
        elemento.intencao.setAttribute('placeholder', "Intenção inválida!")
        control = false
    }

    gerarErroAdocao()
    return control
}