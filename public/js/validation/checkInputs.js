import * as elemento from "../process/selecionarElementos.js"

let radioBts = document.querySelectorAll(".radioBts")

export const checkInputs = () => {
    let control = true
    let cont = 0
    if(elemento.nome.value.trim() == ""){
        elemento.nome.classList.add("erro")
        control = false        
    }
    if(elemento.telefone.value.trim() == ""){
        elemento.telefone.classList.add("erro")
        control = false        
    }
    if(elemento.email.value.trim() == ""){
        elemento.email.classList.add("erro")
        control = false
    }

    radioBts.forEach((btn) => {
        if(!btn.checked){
            cont++
        }
        if(cont == 3) control = false
    })
    
    if(elemento.residencia.value == "0"){
        control = false   
    }

    if(elemento.intencao.value == " "){
        control = false   
    }


    return control
}