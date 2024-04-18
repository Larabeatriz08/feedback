function pegarNota () {
    let nota = localStorage.getItem("nota")

    let paragrafo_nota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()