var dados = require('./estados_cidades.js')

function getListaDeEstados(){
    const estados =  dados.estadosCidades.estados
    let uf = []
    let sigla = {}
    let quantidade = estados.length

    estados.forEach((estado) => {
         uf.push(estado.sigla)
    })

    sigla.uf = uf
    sigla.quantidade
    // console.log(sigla)

    return sigla
}
getListaDeEstados()

function getDadosEstado (sigla) {
    const estados =  dados.estadosCidades.estados
    let uf = sigla
    let estadosInfo = {}
    let status = false

    estados.forEach(function (estado) {
        if (estado.sigla == uf) {

            estadosInfo.uf = estado.sigla
            estadosInfo.descricao = estado.nome
            estadosInfo.capital = estado.capital
            estadosInfo.regiao = estado.regiao
            status = true
        }
    })
    
    if (status)
        return estadosInfo
    else
        return false
}
getDadosEstado()

function getCapitalEstado(siglas) {
    const estados =  dados.estadosCidades.estados
    let uf = siglas
    let dadosJson = {}
    let status = false

    estados.forEach(function(estado){
        if (estado.sigla == uf){
            dadosJson.uf = estado.sigla
            dadosJson.descricao = estado.nome
            dadosJson.capital = estado.capital
            status = true
        }
    })

    if (status)
        return dadosJson
    else
        return false
}
getCapitalEstado()

function getEstadosRegiao(regiao) {
    const estados =  dados.estadosCidades.estados
    let regiaoEscolhida = regiao
    let dadosJson = {}
    let dadosArray = []

    estados.forEach(function(estado){
        if (estado.sigla == regiao){

            let info = {
                uf: estado.sigla,
                descricao: estado.nome
            }
            dadosArray.push(info)

        }
    })

    dadosJson.estados = dadosArray
    dadosJson.regiao = regiaoEscolhida

    return dadosJson
}
getEstadosRegiao()

function getCapitalPais(){
    const estados =  dados.estadosCidades.estados
    let dadosJson = {}
    let dadosArray = []

    estados.forEach(function(estado){
        if(estado.capital_pais !== undefined){
            let info = {
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                ano_inicio_capital_pais: estado.capital_pais.ano_inicio,
                ano_termino_capital_pais: estado.capital_pais.ano_fim
            }
            dadosArray.push(info)
        }
        dadosJson.capital = dadosArray

        return dadosJson
    })
}
getCapitalPais()

function getCidades(ufEstado){
    const estados =  dados.estadosCidades.estados
    let uf = ufEstado
    let dadosJson = {}
    let dadosArray = []

    estados.forEach(function (estado){
        if(estado.sigla == uf){
            dadosJson.uf = estado.sigla
            dadosJson.descricao = estado.nome
            dadosJson.quantidade_cidades = estado.cidades.length
            estado.cidades.forEach(function (cidade) {
                dadosArray.push(cidade.nome)
            })
        }
    })

    dadosArray.cidades = cidades
    return dadosJson
}
getCidades()

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}