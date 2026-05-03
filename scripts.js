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
    // Recupera a cor da equipe
    let cor = document.getElementById("cor").value
    let metaKit //declara variável
    if (cor == "amarela"){
        metaKit = 54
    }
    else if(cor == "cinza"){
        metaKit = 51
    }
    else if(cor == "laranja"){
        metaKit = 21
    }
    else if(cor == "marrom"){
        metaKit = 88
    }
    else if(cor == "preta"){
        metaKit = 60
    }

    //Calcula meta do Suplemento e do Leite
    let metaSuplemento
    let metaLeite = metaKit
    if(metaKit % 2 == 0){ //Par
        metaSuplemento = metaKit/2
    }
    else{ //Ímpar
        metaSuplemento = (metaKit/2) + 0.5
    }
    //Calcula meta da Doação
    let metaSangue = metaSuplemento

    // Calcula a pontuação do Kit de Alimentação
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao"). value)
    if(kitAlimentacao >= metaKit){
        pontos = pontos + 5000
        if(kitAlimentacao > metaKit){
            pontos = pontos + (kitAlimentacao - metaKit) * (5000/metaKit)
        }
    }
    else {
        pontos = pontos + kitAlimentacao * (5000/metaKit)    
    }

    // Calcula a pontuação do Suplemento
    let qtdeLatas = Number(document.getElementById("qtdeLatas").value)
    if(qtdeLatas >= metaSuplemento){
        pontos = pontos + 5000
        if(qtdeLatas > metaSuplemento){
            pontos = pontos + (qtdeLatas - metaSuplemento) * (5000/metaSuplemento)
        }
    }
    else {
        pontos = pontos + (qtdeLatas * (5000/metaSuplemento))
    }

    // Calcula a pontuação do Kit de Alimentação
    let qtdeLeites = Number(document.getElementById("qtdeLeites"). value)
    if(qtdeLeites >= metaLeite){
        pontos = pontos + 5000
        if(qtdeLeites > metaLeite){
            pontos = pontos + (qtdeLeites - metaLeite) * (5000/metaLeite)
        }
    }
    else {
        pontos = pontos + qtdeLeites * (5000/metaLeite)    
    }

    // Calcula a pontuação da Doação
    let qtdeDoacoes = Number(document.getElementById("qtdeDoacoes").value)
    if(qtdeDoacoes >= metaSangue){
        pontos = pontos + 5000
        if(qtdeDoacoes > metaSangue){
            pontos = pontos + (qtdeDoacoes - metaSangue) * (5000/metaSangue)
        }
    }
    else {
        pontos = pontos + (qtdeDoacoes * (5000/metaSangue))
    }
    
    // Vamos exibir o resultado para usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}