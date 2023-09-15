
// Objetivo: Manipular entrada e saída de dados para o usuário
// Data: 04.08.2023
// Autor: Julia Paiva
// Versão 1.0

//colocar a {} dentro dos parenteses dos metodos (coisa do js)


// import da biblioteca de entrada de dados via teclado
const { endianness } = require('os')
var readline = require('readline') 

//Criando um objeto entradaDeDados para ser uma referencia da biblioteca readline
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Função de callback que permite apresentar uma mensagem no terminal e captar a digitação do usuário - O dado digitado chegara para dentro da função atravez do seu argumento(nomeUsuario)

// Entrada de dados nome
entradaDeDados.question('Digite seu nome: ' , function(nomeUsuario){
    // Recebe o nome digitado
     var nome = nomeUsuario
     
     // Entrada de dados idade
     entradaDeDados.question('Digite sua idade: ' , function(idadeUsuario){
        var idade = idadeUsuario

        // Entrada de dados email
        entradaDeDados.question('Digite seu email: ' , function(emailUsuario){
            var email = emailUsuario

            // Entrada de dados telefone
            entradaDeDados.question('Digite seu telefone: ' , function(telefoneUsuario){
                var telefone = telefoneUsuario

                console.log('----------------------------------')
                console.log('Bem vindo ao aplicativo, ' + nome)
                console.log('A idade informada é ' + idade)
                console.log('O email informaoda é ' + email)
                console.log('O telefone informado é ' + telefone)


                // Encerra o processamento de entrada de dados
                entradaDeDados.close()
            })
        })
        
     })

})


// Exibe uma mensagem no terminal com o nome digitado
     // console.log('Bem vindo ao aplicativo, ' + nome)

    