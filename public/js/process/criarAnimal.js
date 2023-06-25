import { gerarNovoId } from "./gerarNovoId.js"
import { listaPosts } from "../utils/listaPosts.js"
import * as elemento from "../utils/elementosCadastro.js"

export function criarAnimal(){
    const animal = {
        id: gerarNovoId(),
        titulo: elemento.titulo.value,
        descricao: elemento.descricao.value,
        imgURL: elemento.imgURL.value
    }

    listaPosts.push(animal)
    localStorage.setItem('animais', JSON.stringify(listaPosts))
}