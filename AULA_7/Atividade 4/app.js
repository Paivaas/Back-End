// Objetivo: Fatorial
// Data: 22.09.2023
// Autor: Julia Paiva
// Versão 1.0
//•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°
//⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱


var funcionalidades = require('./modulo/funcionalidades.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')
console.log('   CALCULADOR FATORIAL ')
console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

entradaDeDados.question('Digite o número a ser fatorado: ', function(fatorial){
    var numero = fatorial;

    if(fatorial == 0){
        console.log('ERRO | Não é possivel calcular o fatorial de 0')
        console.log('')
        entradaDeDados.close()
    }else{
        var fatorial = funcionalidades.calculoFatorial(numero) 
        console.log("")
        entradaDeDados.close()
    }
})

