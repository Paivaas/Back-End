// Objetivo: Fatorial
// Data: 15.09.2023
// Autor: Julia Paiva
// Versão 1.0
//•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°
//⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱


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

        let calculo = ''
        let resultado = 1;

        for (let i = numero; i >= 1; i--) {
        resultado *= i;
        calculo += i == 1 ? `${i}` : `${i}x`;
        }
        console.log('O fatorial de '+fatorial+" é "+calculo+' = '+resultado);

        console.log('')
        entradaDeDados.close()
    }
})


// const dadosFatoriais = function (fatorial, resultado) {

//     let vfatorial = fatorial
//     let vResu = fatorial
    
// }