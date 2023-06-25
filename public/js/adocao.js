import { gerarCardSelecionado } from "./process/gerarCardSelecionado.js"
import { alterarTema } from "./utils/alterarTema.js"
import { enviarFormulario } from "./process/enviarFormulario.js"
import { checkIdSessionStorage } from "./validation/checkIdSessionStorage.js"

window.onload = () => {

    checkIdSessionStorage()
    gerarCardSelecionado()
    alterarTema()
    enviarFormulario()

}

