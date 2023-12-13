var dados = require('./dados')

// Funcionando
const getListaUsuarios = () => {

    const info = dados.usuarios.dados 
    let usuariosA = []
    let usuariosJ = {} 
    
    info.forEach((dados) =>{
       
        let dadosFinais = {
            id: dados.nome
        }
        
        usuariosA.push(dadosFinais)

    })

    usuariosJ.dados = usuariosA
    usuariosJ.usuarios = info.length

   console.log(usuariosJ)

}
getListaUsuarios()

//Funcionando
const getListaPizza = () => {

    const info = dados.produtos.pizzas
    let produtosA = []
    let produtosJ = {}

    info.forEach((dados) => {

        let dadosFinais = {
            id: dados.id,
            categoria: dados.categoria,
            nome: dados.nome,
            descricao: dados.descricao,
            preco: dados.preco
        }

        produtosA.push(dadosFinais)

    })

    produtosJ.dados = produtosA
    produtosJ.quantidade = info.length

    console.log(produtosJ)

}
getListaPizza()

// Funcionando
const getListaBebidas = () => {

    const info = dados.produtos.bebidas
    let produtosA = []
    let produtosJ = {}

    info.forEach((dados) => {

        let dadosFinais = {
            id: dados.id,
            categoria: dados.categoria,
            nome: dados.nome,
            descricao: dados.descricao,
            preco: dados.preco
        }

        produtosA.push(dadosFinais)

    })

    produtosJ.dados = produtosA
    produtosJ.quantidade = info.length

    console.log(produtosJ)

}
getListaBebidas()

// Funcionando
const getListarSobremesas = () => {

    const info = dados.produtos.sobremesas
    let produtosA = []
    let produtosJ = {}

    info.forEach((dados) => {

        let dadosFinais = {
            id: dados.id,
            categoria: dados.categoria,
            nome: dados.nome,
            descricao: dados.descricao,
            preco: dados.preco
        }

        produtosA.push(dadosFinais)

    })

    produtosJ.dados = produtosA
    produtosJ.quantidade = info.length

    console.log(produtosJ)

}
getListarSobremesas()


// Funcinando
const getListarCategorias = () => {

    const info = dados.categorias.dados
    let categoriasA = []
    let categoriasJ = {}

    info.forEach((dados) => {

        let dadosFinais = {
            id: dados.id,
            nome: dados.nome,
            foto: dados.foto
        }

        categoriasA.push(dadosFinais)

    })

    categoriasJ.dados = categoriasA
    categoriasJ.quantidade = info.length

    console.log(categoriasJ)

}
getListarCategorias()


module.exports = {
    getListaUsuarios,
    getListaBebidas,
    getListaPizza,
    getListarSobremesas,
    getListarCategorias
}