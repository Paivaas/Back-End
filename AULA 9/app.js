// Objetivo: Aprender a trabalhar com estruturas de dados Array e JSON
// Data: 06.10.2023
// Autor: Julia Paiva
// Versão 1.0
//•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°
//⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱

const manipulandoArrayJson = function(){

    // Tipos de dados para integração de tecnologias:
    // Exemplo 1 (ultrapassado) - XML <atributo> Valor </atributo>
    // Exemplo 2 - JSON {Atibuto :: Valor}
    // Sempre criar atributos do JSON com letra minusculo e se for palavra composta usar o underscore

    let contato1 = {nome: 'Julia Paiva', telefone: '11 238247', email: 'juliapoliver12@gmail.com'}
    let contato2 = {nome: 'Loira GIGIG', telefone: '11 238247', email: 'loira@gmail.com'}
    let contato3 = {nome: 'LARISSA DAM', telefone: '11 2-9737', email: 'lari@gmail.com'}
    
    let arrayContatos = [contato1, contato2, contato3]

    console.log(arrayContatos)
    console.log(arrayContatos[0])
    console.log(arrayContatos[0].nome)

    // Crinado novos atributoa nno JSON de forma dinamica 
    contato1.data_nascimento = '18/07/2006'

    // console.log(typeof(contato))

    // para extrair conteudo de cada atributo do JSON
    // console.log( "Nome: "+contato1.nome)
    // console.log( "Email: "+contato1.email)
    // console.log( "Data de nascimento: "+contato1.data_nascimento)
    // console.log( "Telefone: "+contato1.telefone)


    //Percorrendo Arrey e JSON - dados é uma variavel callback
    arrayContatos.forEach(function (dados){
        console.log( "Nome: "+dados.nome)
        console.log( "Email: "+dados.email)
        console.log( "Data de nascimento: "+dados.data_nascimento)
        console.log( "Telefone: "+dados.telefone)
        console.log('')
     })

}

manipulandoArrayJson()