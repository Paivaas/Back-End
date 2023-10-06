
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')
console.log(' GERENCIADOR DE NÚMEROS  ')
console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

entradaDeDados.question('Digite o número inicial ', function(nInicial){
    var numeroInicial = nInicial;

    entradaDeDados.question('Digite o número final: ', function(nFinal){
        var numeroFinal = nFinal;
        
        if(nInicial < 0 || nFinal < 0 || nFinal > 500 || nFinal > 500 || nInicial < 0 || nInicial < 0 || nInicial > 500 || nInicial > 500)
            console.log('> ERRO | O número inserido exede o valor minimo ou maximo')
        else if(nInicial == '' || nFinal == '')
            console.log('> ERRO | É obrigatorio a entrada de todos os dados') 
        else if(numeroInicial > numeroFinal)
            console.log('> ERRO | O valor inicial deve ser menor que o final') 
        else if(numeroInicial == numeroFinal)
            console.log('> ERRO | O valor inicial deve ser dierente do final') 
        else{


            
        }
        
    })

})