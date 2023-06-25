import { enviarCadastroAnimal } from "./process/enviarCadastroAnimal.js"
import { alterarTema } from "./utils/alterarTema.js"
import { hoverLogo } from "./utils/hoverLogo.js"

window.onload = () => {
    AOS.init();

    enviarCadastroAnimal()
    alterarTema()
    hoverLogo()
}