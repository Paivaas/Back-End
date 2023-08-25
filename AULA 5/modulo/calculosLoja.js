function calculadora(produto, pagamento){

    let resultado

    if(pagamento == '1'){
        const desconto = (produto * 8) / 100
        resultado = produto - desconto
    

    }else if(pagamento == '2'){
        const desconto = (produto * 4) / 100
        resultado = produto - desconto
        

    }else if(pagamento == '3'){
        const parcela = produto / 2
        resultado = parcela

    }else if(pagamento == '4'){
        const acrescido = (produto * 8) / 100
        resultadototal = Number(produto) + Number(acrescido)
        resultado = resultadototal / 4
        
    }else{
        console.log('valor invalido')
    }

    return resultado

    entradaDeDados.close()
}

module.exports = {
    calculadora
}