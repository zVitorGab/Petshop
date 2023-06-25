import { alterarTema } from "./utils/alterarTema.js"
import { inserirIdSessionStorage } from "./process/inserirIdSessionStorage.js"
import { criarCardsStorage } from "./process/criarCardsStorage.js"

window.onload = () => {

    criarCardsStorage()
    alterarTema()
    inserirIdSessionStorage()

}


