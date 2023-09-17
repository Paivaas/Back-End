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
        var sexoAluno = sexoA

        entradaDeDados.question('Nome do professor: ', function(nomeP){
            var nomeProfessor = nomeP

            entradaDeDados.question('Sexo do professor [F] ou [M]: ', function(sexoP){
                var sexoProfessor = sexoP

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

                                        
                                        // validaçoes
                                        if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){

                                            console.log('ERRO | É obrigatorio a entrada de todos os dados') 
                                            entradaDeDados.close()

                                        }else if(isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

                                            console.log('ERRO | É obrigatorio a entrada de dados somente com números')
                                            entradaDeDados.close()

                                        }else if(nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){

                                            console.log('ERR0 | A nota informada exede o valor maximo ou minimo de dados')
                                        

                                        }else{

                                            let media = ( Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4
                                            
                                            if (media > 70){

                                                console.log('')
                                                console.log('  RELATORIO ESTUDANTIL')
                                                 console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

                                                if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'F'){
                                                    console.log('A aluna ' + nomeA + ' foi aprovada na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professora: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'M'){
                                                    console.log('A aluna ' + nomeA + ' foi aprovada na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professor: '+ nomeProfessor)
                                                    console.log('Notas o aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'F'){
                                                    console.log('O aluno ' + nomeA + ' foi aprovado na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professora: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'M'){
                                                    console.log('O aluno ' + nomeA + ' foi aprovado na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professor: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()
                                                }

                                            }else if(media >= 50 && media < 69){

                                                entradaDeDados.question('Nota do Exame: ' , function(exame){
                                                    var notaExame = exame

                                                    resultadoPosExame = (Number(media) + Number(exame))/2
                                                   
                                                    if(resultadoPosExame >= 60){
                                                        console.log('')
                                                    console.log('  RELATORIO ESTUDANTIL')
                                                    console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

                                                    if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'F'){
                                                        console.log('A aluna ' + nomeA + ' foi aprovada na disciplina ' + disciplina)
                                                        console.log('Curso:' + nomeCurso)
                                                        console.log('Professora: '+ nomeProfessor)
                                                        console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                        console.log('media final:' + media)
                                                        console.log('media final com exame:' + resultadoPosExame)
                                                        console.log('')
                                                        entradaDeDados.close()

                                                    }else if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'M'){
                                                        console.log('A aluna ' + nomeA + ' foi aprovada na disciplina ' + disciplina)
                                                        console.log('Curso:' + nomeCurso)
                                                        console.log('Professor: '+ nomeProfessor)
                                                        console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                        console.log('media final:' + media)
                                                        console.log('media final com exame:' + resultadoPosExame)
                                                        console.log('')
                                                        entradaDeDados.close()

                                                    }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'F'){
                                                        console.log('O aluno ' + nomeA + ' foi aprovado na disciplina ' + disciplina)
                                                        console.log('Curso:' + nomeCurso)
                                                        console.log('Professora: '+ nomeProfessor)
                                                        console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                        console.log('media final:' + media)
                                                        console.log('media final com exame:' + resultadoPosExame)
                                                        console.log('')
                                                        entradaDeDados.close()

                                                    }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'M'){
                                                        console.log('O aluno ' + nomeA + ' foi aprovado na disciplina ' + disciplina)
                                                        console.log('Curso:' + nomeCurso)
                                                        console.log('Professor: '+ nomeProfessor)
                                                        console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                        console.log('media final:' + media)
                                                        console.log('media final com exame:' + resultadoPosExame)
                                                        console.log('')
                                                        entradaDeDados.close()
                                                    }
                                                }else{
                                                console.log('')
                                                console.log('  RELATORIO ESTUDANTIL')
                                                console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

                                                if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'F'){
                                                    console.log('A aluna ' + nomeA + ' foi reprovada na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professora: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                    console.log('media final:' + media)
                                                    console.log('media final com exame:' + resultadoPosExame)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'M'){
                                                    console.log('A aluna ' + nomeA + ' foi reprovada na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professor: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                    console.log('media final:' + media)
                                                    console.log('media final com exame:' + resultadoPosExame)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'F'){
                                                    console.log('O aluno ' + nomeA + ' foi reprovado na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professora: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                    console.log('media final:' + media)
                                                    console.log('media final com exame:' + resultadoPosExame)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'M'){
                                                    console.log('O aluno ' + nomeA + ' foi reprovado na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professor: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + exame)
                                                    console.log('media final:' + media)
                                                    console.log('media final com exame:' + resultadoPosExame)
                                                    console.log('')
                                                    entradaDeDados.close()
                                                }
                                                }
                                                
                                                })

                                            }else if(media < 50){
                                                console.log('')
                                                console.log('  RELATORIO ESTUDANTIL')
                                                 console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

                                                if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'F'){
                                                    console.log('A aluna ' + nomeA + ' foi reprovada na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professora: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'F' && sexoP.toUpperCase() == 'M'){
                                                    console.log('A aluna ' + nomeA + ' foi reprovada na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professor: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'F'){
                                                    console.log('O aluno ' + nomeA + ' foi reprovado na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professora: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()

                                                }else if(sexoA.toUpperCase() == 'M' && sexoP.toUpperCase() == 'M'){
                                                    console.log('O aluno ' + nomeA + ' foi reprovado na disciplina ' + disciplina)
                                                    console.log('Curso:' + nomeCurso)
                                                    console.log('Professor: '+ nomeProfessor)
                                                    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 )
                                                    console.log('media final:' + media)
                                                    console.log('')
                                                    entradaDeDados.close()
                                                }
                                            }

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