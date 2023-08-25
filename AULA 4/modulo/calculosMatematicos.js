function calculadora(numero1, numero2, tipoCalculo){

    //Recebendo os valores dos argumentos da funçao em variaveis locais
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado;

    switch(operacao){
        case 'SOMAR':
        case '+':
            resultado = valor1 + valor2;
            break;
        case 'SUBTRAIR':
        case '-':
            resultado = valor1 - valor2;
            break;
        case 'MULTIPLICAR':
        case '*':
            resultado = valor1 * valor2;
            break;
        case 'DIVIDIR':
        case '/':
            if (valor2 != 0)
            resultado = valor1 / valor2;
            else 
            console.log('ERRO? Não é possível realizar uma divisão por 0')
        break;
        default: console.log('ERRO: É obrigatório informar uma operação válida')
        break;

    }

    if (resultado != undefined)
        if(String(resultado).indexOf('.')!=-1)
            return Number(resultado).toFixed(2)
        else
            return resultado
    else
        return false

}

module.exports = {
    calculadora
}