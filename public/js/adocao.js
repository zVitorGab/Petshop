import { gerarCardSelecionado } from "./process/gerarCardSelecionado.js"
import { alterarTema } from "./utils/alterarTema.js"
import { enviaFormulario } from "./process/enviaFormulario.js"
import { checkIdSessionStorage } from "./validation/checkIdSessionStorage.js"

window.onload = () => {

    checkIdSessionStorage()
    gerarCardSelecionado()
    alterarTema()
    enviaFormulario()

}

