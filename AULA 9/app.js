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

    let contato = {nome: 'Julia Paiva', telefone: '11 238247', email: 'juliapoliver12@gmail.com'}
    console.log(contato)

    // Crinado novos atributoa nno JSON de forma dinamica 
    contato.data_nascimento = '18/07/2006'

    // console.log(typeof(contato))

    // para extrair conteudo de cada atributo do JSON
    console.log( "Nome: "+contato.nome)
    console.log( "Email: "+contato.email)
    console.log( "Data de nascimento: "+contato.data_nascimento)
    console.log( "Telefone: "+contato.telefone)



}

manipulandoArrayJson()