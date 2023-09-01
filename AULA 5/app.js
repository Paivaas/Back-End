// Objetivo: elaborar um programa que auxilie no processo de vendas de uma loja, o programa deve 
// solicitar o valor da venda apresentar o valor atualizado conforme a tabela de condições abaixo
// Data: 25.08.2023
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

var calculosLoja = require('./modulo/calculosLoja.js')

entradaDeDados.question("Insira o valor do item: ", function(produto){
        var valorproduto = produto.replace(',', '.')

        if(isNaN(valorproduto)){
            console.log('> Valor invalido')
            console.log('')
            entradaDeDados.close()

        }else{
            console.log('_________________________________________')
            console.log('')
            console.log('Formas de de Pagamento: ')
            console.log('1 | Á vista, com 8% de desconto')
            console.log('2 | Á vista no cartão, com 4% de desconto')
            console.log('3 | Em 2x, o preço normla sem juros')
            console.log('4 | Em 4x, preço acrescido de 8%')
            console.log('_________________________________________')
            console.log('')

            entradaDeDados.question("Digite o número correspondente á forma de pagamento escolhida: ", function(pagamento){
            let formaPagamento = pagamento

            resultado = calculosLoja.calculadora(produto, pagamento)

            if (pagamento == 1 || pagamento == 2){
                console.log('')
                console.log('O valor do produto é: ' + produto)
                console.log('O valor final é: ' + resultado)
                console.log('')
            }else if(pagamento == 3 || pagamento == 4){
                console.log('')
                console.log('O valor do produto é: ' + produto)
                console.log('O valor de cada parcela é: ' + resultado)
                console.log('')
            }

            entradaDeDados.close()
            
    })
        }

    
})



