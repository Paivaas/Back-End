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
        console.log( "Telefone: "+dados.telefone)

        // Tratamento para validar a impressao dos valores
        if(dados.data_nascimento != undefined){
            console.log( "Data de nascimento: "+dados.data_nascimento)
        }
        console.log('')
     })



}

manipulandoArrayJson()


const produtosArrayJson = function(){
    let listaCores = [

                        {id: 1, nome: 'Branco'},
                        {id: 2, nome: 'Preto'},
                        {id: 3, nome: 'Cinza'},
                        {id: 4, nome: 'Rosa'},
                        {id: 5, nome: 'Vemelho'},
                        {id: 6, nome: 'Azul'},
                    ]

    let listaMarca = [

                        {id: 1, nome: 'Dell'},
                        {id: 2, nome: 'Lenovo'},
                        {id: 3, nome: 'Apple'},
                        {id: 4, nome: 'Logitec'},
                        {id: 5, nome: 'Positivo'},
                        {id: 6, nome: 'Multilaser'},
                    ]

    let listaCategorias = [

                        {id: 1, nome: 'Hardware', descricao: 'Peças de PC'},
                        {id: 2, nome: 'Perifericos', descricao: 'Conectores'},
                        {id: 3, nome: 'Gamer', descricao: 'Para jogos'},
                        {id: 4, nome: 'Acessorios', descricao: 'Decorações'},
                    ]


    //Cria um objeto do tipo JSON para guardra os produtos
    let jsonProdutos = {}

    //Cria um objeto do tipo ARRAY para guardra os produtos
    let arrayProdutos = []

    //Objeto para criar os pordutos
    let produto1 = {id: 1, 
                    nome: 'Mouse', 
                    descricao: 'Mouse optico com fio', 
                    categoria: listaCategorias[1],
                    marca: listaMarca[0],
                    cor: [
                        listaCores[1],listaCores[2],listaCores[3]
                        ]
                    }

    let produto2 = {id: 2, 
                    nome: 'Teclado', 
                    descricao: 'Teclado com fio', 
                    categoria: listaCategorias[1],
                    marca: listaMarca[4],
                    cor: listaCores
                    }

    console.log(produto1)
    

}

produtosArrayJson()