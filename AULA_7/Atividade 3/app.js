// Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
// Data: 22.09.2023
// Autor: Julia Paiva
// Versão 1.0
//•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°
//⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱


var readline = require('readline')
var funcionalidades = require('./modulo/funcionalidades.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')
console.log('         TABUADA')
console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

entradaDeDados.question('Digite o valor da primeira tabuada:', function (valorTabuada1) {
    let primeiraTabuada = valorTabuada1

    entradaDeDados.question('Digite o valor da segunda tabuada:', function (valorTabuada2) {
        let segundaTabuada = valorTabuada2

        entradaDeDados.question('Digite o primeiro multiplicador:', function (multiplicador1) {
            let primeiroMultiplicador = multiplicador1

            entradaDeDados.question('Digite o segundo multiplicador:', function (multiplicador2) {
                let segundoMultiplicador = multiplicador2

               
                    if(valorTabuada1 < 2 || valorTabuada1 > 100 || valorTabuada2 < 2 || valorTabuada2 > 100)
                        console.log('ERRO: Os valores das tabuadas devem estar entre 2 e 100')
                    else if(multiplicador1 < 1 || multiplicador1 > 50 || multiplicador2 < 1 || multiplicador2 > 50)
                        console.log('ERRO: Os valores dos multiplicadores devem estar entre 1 e 50')
                    else if(!valorTabuada1 || !valorTabuada2 || !multiplicador1 || !multiplicador2)
                        console.log('ERRO: Todos os valores devem ser informados');                       
                    else if(isNaN(valorTabuada1) || isNaN(valorTabuada2) || isNaN(multiplicador1) || isNaN(multiplicador2))
                        console.log('ERRO: Todos os valores devem ser números');
                    else{
                        funcionalidades.calculoTabuada(primeiraTabuada, segundaTabuada, primeiroMultiplicador, segundoMultiplicador)
                        entradaDeDados.close()
                    }
            })
        })
    })
})