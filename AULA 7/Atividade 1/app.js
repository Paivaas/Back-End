// Objetivo: Calculadora de Imc
// Data: 15.09.2023
// Autor: Julia Paiva
// Versão 1.0
//•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•
//⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆


var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var funcionalidades  = require('./modulo/funcionalidades.js')

entradaDeDados.question('Digite seu peso: ', function(peso){
    var valorPeso = peso
    
    entradaDeDados.question('Digite seu altura: ', function(altura){
        var valorAltura = altura

        imc = funcionalidades.calculadoraImc(peso, altura)
        resultado = funcionalidades.verificaSituacao(imc)

        if(imc == undefined)
            console.log("↻")
        else
            console.log('Seu IMC é: ' + imc + resultado)

        entradaDeDados.close()
    })
})



