import * as elemento from "../utils/elementosAdocao.js"
 
export function criarAdotante(){
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
    //return adotante
}