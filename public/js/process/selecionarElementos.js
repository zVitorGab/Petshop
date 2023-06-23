let nome = document.querySelector("#nome")
let telefone = document.querySelector("#telefone")
let email = document.querySelector("#email")
let renda = document.querySelector("input[type='radio']:checked")
let residencia = document.querySelector("#residencia")
let opcaoResidencia = residencia.options[residencia.selectedIndex]
let intencao = document.querySelector("#intencao")

export {nome, telefone, email, renda, residencia, opcaoResidencia, intencao}