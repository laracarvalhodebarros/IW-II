let botao = document.getElementById("btnClique")

let texto = document.getElementById("texto")

botao.addEventListener ("click", function () {
    alert("O Botão foi precionado")
    texto.textContent = "Texto Novo"
})

let inputnome = document.getElementById("inputNome")

let botaonome = document.getElementById("btnMostrar")

botaonome.addEventListener ("click", function () {
    alert("o nome digitado foi: " + inputnome.value)
})

let lista = document.getElementById("lista")

let botaolista = document.getElementById("btnAdicionar")

botaolista.addEventListener("click", function() {
    let novoelemento = document.createElement("li")
    novoelemento.textContent = "Novo Elemento"
    lista.appendChild(novoelemento)
})

let bloco = document.getElementById("caixa")

let botaocor = document.getElementById("btnCor")



let corAtual = "red"

botaocor.addEventListener("click", function() {
    if (corAtual === "red") {
        bloco.style.backgroundColor = "blue"
        corAtual = "blue"
    } else {
        bloco.style.backgroundColor = "red"
        corAtual = "red"
    }
})


let contador = 0

botao.addEventListener("click", function () {
    contador++
    console.log("Quantidade de cliques:", contador)
})

botaolista.addEventListener("dblclick", function() {
    let ultimo = lista.lastElementChild

    if (ultimo) {
        lista.removeChild(ultimo)
    }
})




inputnome.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada:", event.key)
})


bloco.addEventListener("mouseenter", function() {
    console.log("Mouse entrou na div")
})

bloco.addEventListener("mouseleave", function() {
    console.log("Mouse saiu da div")
})
