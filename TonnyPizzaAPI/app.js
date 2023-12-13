//Importe das bibliotecas do projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()


app.use((request, response, next)=>{
    
    response.header('Access-Control-Allow-Origin', '*')
    
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())


    next();
})

 //EndPoints: listar os usuarios
app.get('/dados/usuarios', cors(), async function(request, response, next){
    let controleListaUsuarios = require('./modulo/funcionalidades.js')
    let dados = controleListaUsuarios.getListaUsuarios()
    response.json(dados)
    response.status(200)
})
 //EndPoints: listar as pizzas
 app.get('/dados/usuarios', cors(), async function(request, response, next){
    let controleListaPizza = require('./modulo/funcionalidades.js')
    let dados = controleListaPizza.getListaPizza()
    response.json(dados)
    response.status(200)
})
 //EndPoints: listar as bebidas
 app.get('/dados/usuarios', cors(), async function(request, response, next){
    let controleListaBebidas = require('./modulo/funcionalidades.js')
    let dados = controleListaBebidas.getListaBebidas()
    response.json(dados)
    response.status(200)
})
 //EndPoints: listar as sobremesas
 app.get('/dados/usuarios', cors(), async function(request, response, next){
    let controleListaSobremesas = require('./modulo/funcionalidades.js')
    let dados = controleListaSobremesas.getListarSobremesas()
    response.json(dados)
    response.status(200)
})


 //Executa a API
app.listen(8080, function(){
    console.log('api funcionando e aguardando requisições')

})