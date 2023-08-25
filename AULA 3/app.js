// Objetivo: Calculadora de Media
// Data: 18.04.2023
// Autor: Julia Paiva
// Versão 1.0

/* _____________________________________________________________________________________

----Operadores de comparação----
==   Igual
<    Menor
>    Maior
<=   Menor ou igual
>=   Maior ou igual
!=   Diferente
===  Comparação de conteudos iguais e tipo de dadps iguais ex: 1 === 1 , 1 === "1"
!==  Comparação de conteudos diferentes e tipos de e tipos de dados iguais
==!  Conparação de conteudos iguais e tipos de dados diferentes

----Operadores logicos----
E            And     &&
OU           Or      ||
Negagação    NOT      !

----Conversão de String para número----
- parseInt() ~convete uma string para números inteiros
- parseFloat() ~ converte a string para números reais
- number() ~ converte uma string para números inteiros ou reais conforme a necessidade

_____________________________________________________________________________________*/


const { endianness } = require('os')
var readline = require('readline') 
const { isNumberObject } = require('util/types')
const { SourceTextModule } = require('vm')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('------------------------------------------')

entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno){
    let nome = nomeAluno

    entradaDeDados.question('Nota 1: ', function(notaAluno1){
        let nota1 = notaAluno1.replace(',', '.')

        entradaDeDados.question('Nota 2: ', function(notaAluno2){
            let nota2 = notaAluno2.replace(',', '.')

            entradaDeDados.question('Nota 3: ', function(notaAluno3){
                let nota3 = notaAluno3.replace(',', '.')

                entradaDeDados.question('Nota 4: ', function(notaAluno4){
                    let nota4 = notaAluno4.replace(',', '.')

                    if(nota1 == '' || nota2 == ''  || nota3 == '' || nota4 == ''){
                        console.log('ERRO | É necessario informar todas as notas')

                    }else if(isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO | É obrigatorio a entrada de dados somente com números')

                    }else if(nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
                        console.log('ERR0 | A nota informada exede o valor maximo ou minimo de dados')

                    }else{
                        let media = ( Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4
                        console.log('A media de ' + nomeAluno.toLocaleUpperCase() + ' é ' + media.toFixed(1).replace('.', ','))
                        
                    }
            
                })
            })
        })
    })
})