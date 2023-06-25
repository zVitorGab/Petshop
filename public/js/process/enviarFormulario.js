import { checkInputsAdocao } from "../validation/checkInputsAdocao.js"
import { criarAdotante } from "./criarAdotante.js"

let formulario = document.querySelector("form")

export function enviarFormulario(){ 
    formulario.addEventListener("submit", (event) => {
        
        if(!checkInputsAdocao()){
            event.preventDefault()
        }else{
            criarAdotante()
        }
    })
}