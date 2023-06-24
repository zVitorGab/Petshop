import { criarCards } from "./process/criarCards.js"
import { alterarTema } from "./utils/alterarTema.js"
import { inserirIdSessionStorage } from "./process/inserirIdSessionStorage.js"

window.onload = () => {

    criarCards()
    alterarTema()
    inserirIdSessionStorage()

}


