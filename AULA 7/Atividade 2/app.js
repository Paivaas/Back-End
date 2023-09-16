// Objetivo: Sistema de cadastro em uma faculdade
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
console.log('   CADASTRO ESTUDANTIL')
console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')
entradaDeDados.question('Nome do aluno: ', function(nomeA){
    var nomeAluno = nomeA

    entradaDeDados.question('Sexo do aluno [F] ou [M]: ', function(sexoA){
        var sexoAluno = String(sexoA)

        console.log(sexoA.toLocaleUpperCase())
        entradaDeDados.question('Nome do professor: ', function(nomeP){
            var nomeProfessor = nomeP

            entradaDeDados.question('Sexo do professor [F] ou [M]: ', function(sexoP){
                var sexoProfessor = String(sexoP).ignoreCase

                entradaDeDados.question('Qual curso '+ nomeA +' frequenta: ', function(curso){
                    var nomeCurso = curso

                    entradaDeDados.question('Qual disciplina '+ nomeP +' leciona: ' , function(disciplina){
                        var nomeDisciplina = disciplina
                        console.log('')


                        // Entrada de Notas
                        entradaDeDados.question('Nota 1: ' , function(nota1){
                            var n1 = nota1
                        
                            entradaDeDados.question('Nota 2: ' , function(nota2){
                                var   n2 = nota2
    
                                entradaDeDados.question('Nota 3: ' , function(nota3){
                                    var n3 = nota3

                                    entradaDeDados.question('Nota 4: ' , function(nota4){
                                        var n4 = nota4
                                        let media = ( Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4
                                        
                                        if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' )
                                            console.log('ERRO | É obrigatorio a entrada de todos os dados')
                                        else if(isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
                                            console.log('ERRO | É obrigatorio a entrada de dados somente com números')
                                        else if(nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0)
                                            console.log('ERR0 | A nota informada exede o valor maximo ou minimo de dados')
                                        else if(sexoA == 'F' || sexoA == 'f'){
                                            console.log('A aluna' + nomeA + 'foi aprovada na disciplina' + disciplina)
                                            console.log('Curso:' + nomeCurso)
                                            console.log('Professor: '+ nomeProfessor)
                                            console.log('Notas do aluno: ' + nota1 + nota2 )
                                            console.log('mediia  final:' + media)
                                            console.log('')
                                            entradaDeDados.close()
                                        }
                                        else{
                                            console.log('A media de ' + nomeA.toLocaleUpperCase() + ' é ' + media.toFixed(1).replace('.', ','))
                                            entradaDeDados.close()
                                        }
                                        
                  
                                    })
                                    
                                })
          
                            })

                        })

                    })

                })
                
            
            })
        
        })
    
    })

})