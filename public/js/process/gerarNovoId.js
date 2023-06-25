import { listaPosts } from "../utils/listaPosts.js";

export function gerarNovoId(){
    let novoId = 0
    listaPosts.forEach((get) => {
        novoId = get.id
    })
    return novoId += 1
}