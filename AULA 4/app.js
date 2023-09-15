// Projeto: Minha Calculadora
// Data: 11.08.2023
// Autor: Julia Paiva
// Versão 1.0

const { endianness } = require('os')
var readline = require('readline') 
const { isNumberObject } = require('util/types')
const { SourceTextModule } = require('vm')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("-----------------------------------------------------------------")
console.log('Bem vindo ao programa CALCULADORA')
console.log('instruções:')
console.log('1. Escolha qual operação deseja fazer')
console.log('2. Preencha abaixo os números que deseja utlizar para a operação')
console.log("-----------------------------------------------------------------")
console.log("")

entradaDeDados.question("Qual será a operação? [ +  -  /  x] ", function(operador){
    var EscolhaOperador = operador

    entradaDeDados.question("Número 1: ", function(numero1){
        let n1 = numero1.replace(',', '.')

        entradaDeDados.question("Número 2: ", function(numero2){
            let n2 = numero2.replace(',', '.')

            if(EscolhaOperador == '+'){
                if(numero1 == 0 || numero2 == 0){
                    console.log("Não é possivel realizar essa operação com 0")
                }else{
                let conta = Number(n1) + Number(n2)
                console.log('Resultado: ' + n1 + ' ' + operador  + ' ' + n2+ ' ' + '=' + ' ' + conta.toFixed(0))
                }

            }else if(EscolhaOperador == '-'){
                
                if(numero1 == 0 || numero2 == 0){
                    console.log("Não é possivel realizar essa operação com 0")
                }else{
                let conta = Number(n1) - Number(n2)
                console.log('Resultado: ' + n1 + ' ' + operador  + ' ' + n2+ ' ' + '=' + ' ' + conta.toFixed(0))
                }

            }else if(EscolhaOperador == '/'){
                if(numero1 == 0 || numero2 == 0){
                    console.log("Não é possivel realizar essa operação com 0")
                }else{
                    let conta = Number(n1) / Number(n2)
                    console.log('Resultado: ' + n1 + ' ' + operador  + ' ' + n2+ ' ' + '=' + ' ' + conta.toFixed(2))
                }


            }else if(EscolhaOperador == 'x'){
                if(numero1 == 0 || numero2 == 0){
                    console.log("Não é possivel realizar essa operação com 0")
                }else{
                let conta = Number(n1) * Number(n2)
                console.log('Resultado: ' + n1 + ' ' + operador  + ' ' + n2+ ' ' + '=' + ' ' + conta.toFixed(0))
                }

            }else{
                console.log('Não foi possivel realizar essa operção. Adcione o operador [ ↻ ]')
            }

            entradaDeDados.close()

        })

    })

})
