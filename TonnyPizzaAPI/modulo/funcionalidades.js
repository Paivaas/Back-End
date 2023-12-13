var dados = require('../dados')

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

const getListarCategorias = () => {

    const categoriaInfo = pizzaria.categorias.categoria
    let categoriaArray = []
    let categoriaJSON = {}

    categoriaInfo.forEach((categoria) => {

        let categoriasJSON = {
            id: categoria.id,
            nome_categoria: categoria.nome_categoria
        }

        categoriaArray.push(categoriasJSON)

    })

    categoriaJSON.categoria = categoriaArray
    categoriaJSON.quantidade = categoriaInfo.length

    return categoriaJSON

}



module.exports = {
    getListaUsuarios,
    getListaBebidas,
    getListaPizza
}