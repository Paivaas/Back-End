// Objetivo: Aprender a trabalhar com estruturas de dados Array e JSON
// Data: 29.09.2023
// Autor: Julia Paiva
// Versão 1.0
//•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°
//⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱∘──────∘⊰⋅⋅⋅⋆⋆⋅⋅⋅⊱

// [] -> Representa a estrutura Array (começa no inidice 0)
// {} -> Representa a estrutura JSON

console.log('')
const introducaoArray = function(){

    console.log('')
    console.log('      LISTA DE NOMES')
    console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

    // Criando um array de forma manual
    let listaDeNomes = ['Julia Paiva', 'Ana', 'Carlos', 'Luiz']

    // Exibe os dados o Array
    console.log(listaDeNomes);
    
    // Exibe os dados o Array em tabela
    console.table(listaDeNomes)

    // Retorna a quantidade de elementos de um Array
    console.log('⋅⋅⋅⊱ Quantidade de itens dentro do Array: '+ listaDeNomes.length)

    // Adiciona elementos novos no fim da lista
    console.table('⋅⋅⋅⊱ Adição de elemento no fim na lista: ')
    listaDeNomes.push('Roberto')
    console.table(listaDeNomes)

    // Adiciona elementos novos no inicio da lista
    console.table('⋅⋅⋅⊱ Adição de elemento no inicio na lista: ')
    listaDeNomes.unshift('Oliveira')
    console.table(listaDeNomes)

    // Remove o ultimo elemento do Array
    console.table('⋅⋅⋅⊱ Remoção do ultimo elemento do Array: ')
    listaDeNomes.pop()
    console.table(listaDeNomes)

    // Remove o primeiro elemento do Array
    console.table('⋅⋅⋅⊱ Remoção do primeiro elemento do Array: ')
    listaDeNomes.shift()
    console.table(listaDeNomes)

    // Remove um elemento baseado no indice (2: indice, 1: Quantidade de itens que quero remover)
    console.table('⋅⋅⋅⊱ Remoção de um elemento com base no indice (2,1): ')
    listaDeNomes.splice(2, 1)
    console.table(listaDeNomes)


    console.log("⋅⋅⋅⊱ Mostra o valor e o indice do Array")
    listaDeNomes.forEach(function (item, indice) {
        console.log(item, indice);
        
    });

    console.log("⋅⋅⋅⊱ Adição de elementos com tipos de dados diferentes: ")
    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10)
    console.table(listaDeNomes)

    // Typeof mostra o tipo de dados de um elemento
    console.log(typeof(listaDeNomes))
    console.log(typeof(listaDeNomes[5]))
    console.log(typeof(listaDeNomes[6]))



}
introducaoArray()

const percorrendoArray = function(){

    console.log('')
    console.log('   LISTA DE PRODUTOS')
    console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

    let listaDeprotudos = ['Mouse','Teclado','Monitor','Impressora', 'Mouse Pad','Gabinete','Processador','HD']

    // Fazendo uma repetição, iniciando em 0 e fazendo ele percorrer o Array ate o ultimo indice
    // While
    // let cont = 0
    // while(cont < listaDeprotudos.length){
    //     console.log('Nome do produto: '+listaDeprotudos[cont])
    //     cont ++
    // }

    // FOR
    for(let cont=0; cont < listaDeprotudos.length; cont++){
        console.log('Nome do produto: '+listaDeprotudos[cont])
    }

    //FOREaCH
    
}
percorrendoArray()