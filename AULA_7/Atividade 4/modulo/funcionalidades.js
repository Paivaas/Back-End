function calculoFatorial(fatorial){
    let calculo = ''
    let resultado = 1;

    for (let i = fatorial; i >= 1; i--) {
        resultado *= i;
        calculo += i == 1 ? `${i}` : `${i}x`;
    }
    const final = console.log('O fatorial de '+fatorial+" é "+calculo+' = '+resultado);

    return final 

}

module.exports = {
    calculoFatorial
}