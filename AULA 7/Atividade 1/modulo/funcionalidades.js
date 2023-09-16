function calculadoraImc(peso, altura){

    let valorAlturaltura = String(altura).replace(',', '.')
    let valorPeso = String(peso).replace(',', '.')

    if(peso == '' || altura == '')
    console.log('ERRO | Todos os campos acima devem ser preenchidos')
    else if (isNaN(peso) || isNaN(altura))
    console.log('ERRO | É obrigatorio a entrada de dados somente com números')
    else{
        var imc = Number(peso)/Math.pow(Number(altura), 2)
        return Number(imc.toFixed(2))
    }
}

function verificaSituacao(imc){
    
    var resultado

    if(imc < 18.5)
    resultado = ' | Você está abaixo do peso'
    else if(imc > 18.6 && imc < 24.9)
    resultado = ' | Você está com o peso ideal'
    else if(imc > 25 && imc < 29.9)
    resultado = ' | Você está levemente acima do peso'
    else if(imc > 29 && imc < 34.9)
    resultado = ' | Você está com obesidade grau 1'
    else if(imc > 35 && imc < 39.9)
    resultado = ' | Você está com obesidade grau 2'
    else if(imc > 40)
    resultado = ' | Você está com obesidade grau 3'

    return resultado 
}

module.exports = {
    calculadoraImc, verificaSituacao
}
