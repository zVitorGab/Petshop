import { gerarCardSelecionado } from "./process/gerarCardSelecionado.js"
import { alterarTema } from "./utils/alterarTema.js"
import { enviarFormulario } from "./process/enviarFormulario.js"
import { checkIdSessionStorage } from "./validation/checkIdSessionStorage.js"
import { hoverLogo } from "./utils/hoverLogo.js"

window.onload = () => {
    AOS.init();

    checkIdSessionStorage()
    gerarCardSelecionado()
    alterarTema()
    enviarFormulario()
    hoverLogo()

}

