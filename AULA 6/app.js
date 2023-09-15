// Objetivo: Elaborar o calculo de determinadad tabuada
// Data: 01.09.2023
// Autor: Julia Paiva
// Versão 1.0

var calculoTabuada = require('./modulo/calculoTabuada.js')
var readline = require('readline')

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite uma tabuada: ', function(valorTabuda){
    let tabuada = valorTabuda

    entradaDeDados.question('Digite o valor inicial: ', function(valorInicial){
        let contadorInicial = valorInicial

        entradaDeDados.question('Digite o valor final: ', function(valorFinal){
            let contadorFinal = valorFinal

            //Chama a funcao da tabuada encaminhando os calores que o usuario digitou
            console.log(calculoTabuada.calcularTabuada(valorTabuda, contadorInicial, contadorFinal))

        })
    })
})