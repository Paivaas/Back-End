
function verificaSituacao(imc){
    
    var resultado

    if(imc < 18)
    resultado = ', você está abaixo do peso'
    else if(imc > 18)
    resultado = ', você está saudavel'

    return resultado 
}

module.exports = {
    verificaSituacao
}