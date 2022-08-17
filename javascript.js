//Referencia aos elementos HTML
const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//criar um ouvinte ao evento do botão submit
form.addEventListener("submit", (e) => {
    //evitar o envio do formulario "form"
    e.preventDefault()
    //referencia e captura de informações dos elementos do comapo input
    const name = form.name.value
    const nota1 = Number(form.nota1.value)
    const nota2 = Number(form.nota2.value)
    const nota3 = Number(form.nota3.value)
    const nota4 = Number(form.nota4.value)
    //calcula a media do aluno
    const media = (nota1 + nota2 + nota3 + nota4) / 4
    //Rendereização condicional
    if(media >= 7){
        resp1.innerText = `${name}\n Sua media foi: ${media.toFixed(1)}`
        resp2.innerText = `Parabens, Você Esta Aprovado 🚀`
        resp2.style.color = "green"
    } else if (media >= 5) {
        resp1.innerText = `${name}\n Sua media foi: ${media.toFixed(1)}`
        resp2.innerText = `De Recuperação! Te vejo nas ferias 👋🏽`
        resp2.style.color = "yellow"
    } else {
        resp1.innerText = `${name}\n Sua media foi: ${media.toFixed(1)}`
        resp2.innerText = `Te vejo ano que vem, você esta Reprovado 💔`
        resp2.style.color = "red"
    }
})