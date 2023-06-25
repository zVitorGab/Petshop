import { alterarTema } from "./utils/alterarTema.js"
import { inserirIdSessionStorage } from "./process/inserirIdSessionStorage.js"
import { criarCardsStorage } from "./process/criarCardsStorage.js"
import { hoverLogo } from "./utils/hoverLogo.js"

window.onload = () => {
    AOS.init();

    criarCardsStorage()
    alterarTema()
    inserirIdSessionStorage()
    hoverLogo()

}


