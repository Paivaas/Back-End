//Função para calcular tabuada
const calcularTabuada = function (valorTabuada, contadorInicial,contadorFinal){

    //Entrada de dados que chegam pelos argumentos
    let tabuada = String(valorTabuada).replace(',','.')
    let contInicial = String(contadorInicial).replace(',','.')
    let contFinal = String(contadorFinal).replace(',','.')

    let resultado
    let status = false

    //Validação para organizar os valores (menor e maior)
    if(Number(contFinal) < Number(contInicial)){

        // const valorAuxiliar = contInicial
        // contInicial = contFinal
        // contFinal = valorAuxiliar

        contFinal = contadorInicial
        contInicial = contadorFinal
        
    }

    if(tabuada == '' || contFinal == '' || contInicial == '')
        console.log('ERRO: é obrigatorio a entrada de todos os valores')
    else if(isNaN(tabuada)|| isNaN(contFinal) || isNaN(contInicial))
        console.log('ERRO: é obrigatorio a entrada somente de números')
    else{

        //Converte as variaveis em número
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
        tabuada = Number(tabuada)


        // //Exemplo usando o while
        // while(contInicial <= contFinal){
        //     resultado = tabuada * contInicial
        //     console.log(tabuada + 'x' + contInicial + '=' + resultado)
        //     //ou  console.log(`${tabuada} x ${contInicial} = ${resultado}`)

        //     //contInicial = contInicial + 1
        //     // contInicial+=1
        //     contInicial++
                
        //     status = true
        // }

        //Exemplo usando o for
        for(; contInicial <= contFinal; contInicial++){ //Criaçao da variavel, definir ate quantas vezes o const vai acontecer e adcionando o ++
            resultado = tabuada * contInicial
            console.log(tabuada + 'x' + contInicial + '=' + resultado)
            status = true
        }
    }
    return status

} 

 //Chamando a função -- Import do arquivo
 module.exports = {
    calcularTabuada       
}