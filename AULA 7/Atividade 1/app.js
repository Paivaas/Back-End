// Objetivo: Calculadora de Imc
// Data: 15.09.2023
// Autor: Julia Paiva
// Versão 1.0


var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var calculoImc = require('./modulo/calcularImc.js')
var situacaoImc = require('./modulo/verificarSituacao.js')

entradaDeDados.question('Digite seu peso: ', function(peso){
    var pesoUsuario = Number(peso)
    
    entradaDeDados.question('Digite seu altura: ', function(altura){
        var alturaUsuario = altura.replace(',', '.')

        imc = calculoImc.calculadoraImc(peso, altura)
        resultado = situacaoImc.verificaSituacao(imc)

        console.log('Seu IMC é: ' + imc + resultado)

        entradaDeDados.close()
    })
})



