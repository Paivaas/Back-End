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

// console.log('_________________________________________')
// console.log('')
// console.log('Formas de Pagamento: ')
// console.log('1 | Á vista, com 8% de desconto')
// console.log('2 | Á vista no cartão, com 4% de desconto')
// console.log('3 | Em 2x, o preço normla sem juros')
// console.log('4 | Em 4x, preço acrescido de 8%')
// console.log('_________________________________________')


var calculosLoja = require('./modulo/calculosLoja.js')

entradaDeDados.question("Insira o valor do item: ", function(produto){
        var valorproduto = produto.replace(',', '.')

        console.log('_________________________________________')
        console.log('')
        console.log('Formas de de Pagamento: ')
        console.log('1 | Á vista, com 8% de desconto')
        console.log('2 | Á vista no cartão, com 4% de desconto')
        console.log('3 | Em 2x, o preço normla sem juros')
        console.log('4 | Em 4x, preço acrescido de 8%')
        console.log('_________________________________________')
        console.log('')

    entradaDeDados.question("Digite o número da forma de pagamento escolhida: ", function(pagamento){
        let formaPagamento = pagamento

        resultado = calculosLoja.calculadora(produto, pagamento)

                if (resultado){
                console.log(produto)
                console.log(resultado)
                }

                entradaDeDados.close()
 
    })
    
})



