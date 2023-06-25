import * as elemento from "../utils/elementosCadastro.js"

export const checkInputsCadastro = () => {
    let control = true

    if(elemento.titulo.value.trim() ==  ""){
        control = false
    }
    if(elemento.descricao.value.trim() == ""){
        control = false
    }
    if(elemento.imgURL.value.trim() == ""){
        control = false
    }
    return control
}