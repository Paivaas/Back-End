// Projeto: Criar uma api para responder dados de Estados e Cidades
// Data: 10.11.2023
// Autor: Julia Paiva
// Versão 1.0

// Instalações da dependencias para criação da API
// Express      | Dependencia paraauxiliar na criação de API
//|Cors         | DEpendencia para manipular resursos de acesso, permissões, etc da API
// Body-parser  | Dependencia para auziliar na chegada e dados da API
// >>  npm install [nome] --save


//Importe das bibliotecas do projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria um objeto app tendo como referencia classe do express
const app = express()

//função para configurar as ermissoes do cors
//Request - Recebe dados
//Response - Devolve dados

app.use((request, response, next)=>{
    //Configura quem podera fazer requisições na API
    //[*] - publico (Libera para todos)
    //[ip] - privada (Restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')
    
    //Configura os metodos que poderam ser utulizados na API (GET, POST, PUT, DELETE)
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    //
    next();
})

 //EndPoints: listar a sigla de todos os estados
app.get('/estados/sigla', cors(), async function(request, response, next){
    let controleListaEstados = require('./modulo/funcionalidades.js')
    let estados = controleListaEstados.getListaDeEstados()
    response.json(estados)
    response.status(200)
})

 //Executa a API e faz el ficar aguardando requisições
app.listen(8080, function(){
    console.log('api funcionando e aguardando requisições')
})
