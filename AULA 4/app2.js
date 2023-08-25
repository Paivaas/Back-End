// Objetivo: Calculadora do Marcel
// Data: 18.08.2023
// Autor: Julia Paiva
// Versão 1.0

//Import da biblioteca de calculoMatematicos
var calculosMatematicos = require('./modulo/calculosMatematicos.js')

// Biblioteca tipo Scanner (Entarda de dados)
const { Console } = require('console')
var readline = require('readline')

// Criando o objeto para manipular as entradas do usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada de dados do primeiro valor
entradaDeDados.question('Digite o primeiro valor: ', function(numero1){

    let valor1 = numero1.replace(',', '.')

    // Entrada de dados do segundo valor
    entradaDeDados.question('Digite o segundo valor: ', function(numero2){

        let valor2 = numero2.replace(',', '.')

        // Entrada de dados para escolher a operação matemática
        entradaDeDados.question('Digite a operação [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]: ', function(resposta){

            // Convertendo a resposta para maiúsculo
            let operacao = resposta.toUpperCase()

            let resultado

            if(valor1 == '' || valor2 == '' || isNaN(valor1) || isNaN(valor2))

                console.log('ERRO: É obrigatório informar um número')

            else{

                //Conversão de String para número
                valor1 = Number(valor1)
                valor2 = Number(valor2)


                //Validação do tipo de operação matemática
                /* if (operacao == 'SOMAR') 

                    resultado = valor1 + valor2

                else if (operacao == 'SUBTRAIR') 

                    resultado = valor1 - valor2

                else if (operacao == 'MULTIPLICAR') 

                    resultado = valor1 * valor2

                else if (operacao == 'DIVIDIR') {

                    //validação da entrada de dados 0 no valor 2
                    if (valor2 != 0)
                        resultado = valor1 / valor2

                    else 
                        console.log('ERRO? Não é possível realizar uma divisão por 0')

                // Validação para operações matematicas válidas
                } else
                //      console.log('ERRO: É obrigatório informar uma operação válida') */

                

                //Utilizando Switch Case - Versão 2.0

                /* switch(operacao){
                    case 'SOMAR':
                    case '+':
                        resultado = valor1 + valor2;
                        break;
                    case 'SUBTRAIR':
                    case '-':
                        resultado = valor1 - valor2;
                        break;
                    case 'MULTIPLICAR':
                    case '*':
                        resultado = valor1 * valor2;
                        break;
                    case 'DIVIDIR':
                    case '/':
                        if (valor2 != 0)
                        resultado = valor1 / valor2;
                        else 
                        console.log('ERRO? Não é possível realizar uma divisão por 0')
                    break;
                    default: console.log('ERRO: É obrigatório informar uma operação válida')
                    break;

                }*/
                resultado = calculosMatematicos.calculadora(valor1, valor2, operacao)

                //Validadação da variavél undefined
                if (resultado){
                console.log(resultado)
                }
                entradaDeDados.close()

            }

        })

    })

})

// Modelo tradicional de criar funções
// () o que estiver dentro se chama argumento
function calculadora(numero1, numero2, tipoCalculo){

    //Recebendo os valores dos argumentos da funçao em variaveis locais
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado;

    switch(operacao){
        case 'SOMAR':
        case '+':
            resultado = valor1 + valor2;
            break;
        case 'SUBTRAIR':
        case '-':
            resultado = valor1 - valor2;
            break;
        case 'MULTIPLICAR':
        case '*':
            resultado = valor1 * valor2;
            break;
        case 'DIVIDIR':
        case '/':
            if (valor2 != 0)
            resultado = valor1 / valor2;
            else 
            console.log('ERRO? Não é possível realizar uma divisão por 0')
        break;
        default: console.log('ERRO: É obrigatório informar uma operação válida')
        break;

    }

    if (resultado != undefined)
        if(String(resultado).indexOf('.')!=-1)
            return Number(resultado).toFixed(2)
        else
            return resultado
    else
        return false

}