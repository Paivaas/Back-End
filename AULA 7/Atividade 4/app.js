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
    var resultado = fatorial;

    if(fatorial == 0){
        console.log('ERRO | Não é possivel calcular o fatorial de 0')
        console.log('')
        entradaDeDados.close()
    }else{
        for (var i = 1; i < fatorial; i++) {
            resultado *= i;
        }
        console.log('Fatorial de '+fatorial+ ':  '+resultado);
        console.log('')


        entradaDeDados.close()
    }
})


// const dadosFatoriais = function (fatorial, resultado) {

//     let vfatorial = fatorial
//     let vResu = fatorial
    
// }