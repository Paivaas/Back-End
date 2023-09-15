
function verificaSituacao(imc){
    
    var resultado

    if(imc < 18)
    resultado = console.log(', você está abaixo do peso')
    else if(imc > 18)
    resultado = console.log(', você está saudavel')

    return resultado 
}

module.exports = {
    verificaSituacao
}