import { checkInputs } from "../validation/checkInputs.js"
import * as elemento from "./selecionarElementos.js"

let formulario = document.querySelector("form")

export function enviaFormulario(){ 
    formulario.addEventListener("submit", (event) => {
        event.preventDefault()
        
        if(!checkInputs()){
            event.preventDefault()
            console.log("Inputs inválidos!")
        }else{
            const adotante = {
                id:1,
                idAnimal: sessionStorage.getItem("idAnimal"),
                nome: elemento.nome.value,
                telefone: elemento.telefone.value,
                email: elemento.email.value,
                renda: elemento.renda,
                residencia:elemento. opcaoResidencia.value,
                intencao: elemento.intencao.value
            }    
            console.log(adotante)
        }
    })
}