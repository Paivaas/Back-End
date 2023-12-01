
var dados = require('./estados_cidades.js')


function getListaDeEstados(){
    const estados =  dados.estadosCidades.estados
    const uf = []
    const sigla = {}
    const quantidade = estados.length

    estados.forEach((sigla) => {
         uf.push(sigla.sigla)
    })

    const sobreEstados = {uf : uf, quantidade}
    console.log(sobreEstados)
    return sobreEstados
}
getListaDeEstados()



function getDadosEstado(sigla){
    
    const julia  = sigla.toUpperCase()
    const estados =  dados.estadosCidades.estados

    estados.forEach(function(estado) {
        if(estado.sigla == nomeEstado.toUpperCase()){
            jsonInfos.uf = estado.sigla
            jsonInfos.descricao = estado.nome
            jsonInfos.capital = estado.capital
            jsonInfos.regiao = estado.regiao

            status = true
        }
    })

    let status = false
    if(status)
        return jsonInfos
    else
        return false 

}
getDadosEstado()
 



module.exports = {
    getListaDeEstados,
    getDadosEstado
}

