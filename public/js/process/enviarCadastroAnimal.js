import { checkInputsCadastro } from "../validation/checkInputsCadastro.js";
import { criarAnimal } from "./criarAnimal.js";

let formulario = document.querySelector("form")

export function enviarCadastroAnimal(){
    formulario.addEventListener("submit", (event) => {
    
        if(!checkInputsCadastro()){
            event.preventDefault()
        }else{
            criarAnimal()
        }
    })
}


