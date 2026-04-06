function calcular() {
    // JS é uma linguagem não tipada (sem tipo de dados)
    // Number é uma função que converte texto em número
    // Recupera o valor informado no elemento com id qtdeArroz
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // Calcula o valor total de pontos dos itens avulsos
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

    // Calcula o valor total da metas 
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao"). value)
    if(kitAlimentacao >= 60){
        pontos = pontos + 5000
        if(kitAlimentacao > 60){
            pontos = pontos + (kitAlimentacao - 60) * 83.33
        }
    }
    else {
        pontos = pontos + kitAlimentacao * 83.33       
    }
    // Vamos exibir o resultado para usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}