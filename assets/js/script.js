console.log("calcular orcamento")

// Manipulação do DOM
let inputQtde = document.querySelector("#qtde")
let inputJs = document.querySelector("#js")
let inputLayout = document.querySelector("#layout-sim")
let inputLayoutNao = document.querySelector("#layout-nao")
let inputPrazo = document.querySelector("#prazo")

inputQtde.addEventListener("change", atualizarOrcamento)
inputJs.addEventListener("change", atualizarOrcamento)
inputLayout.addEventListener("change", atualizarOrcamento)
inputLayoutNao.addEventListener("change", atualizarOrcamento)
inputPrazo.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = inputQtde.value * 100
    let js = inputJs.checked
    let layout = inputLayout.checked
    let prazo = inputPrazo.value

    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML =  `Prazo (${prazo} semanas)` //template literals
    //labelPrazo.innerHTML = "Prazo (" + prazo + " semanas)" //template literals

    if(js) preco *= 1.1
    if(layout) preco += inputQtde.value * 30
    let taxaDeUrgencia = 1 - prazo*.05
    preco *= 1 + taxaDeUrgencia

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}
