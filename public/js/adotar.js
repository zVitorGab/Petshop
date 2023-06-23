import { checkInputs } from "./validation/checkInputs.js"
import { gerarCardSelecionado } from "./process/gerarCardSelecionado.js"
import * as elemento from "./process/selecionarElementos.js"

window.onload = () => {
    gerarCardSelecionado()
}

let formulario = document.querySelector("form")

formulario.addEventListener("submit", (event) => {

    event.preventDefault()
    
    if(!checkInputs()){
        event.preventDefault()
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