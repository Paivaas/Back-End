
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')
console.log('         TABUADA')
console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')
entradaDeDados.question('VALOR INICAL: ', function(valorInicial){
    var valorI = valorInicial

    entradaDeDados.question('Nome do FINAL: ', function(valorFinal){
        var valorF = valorFinal

        entradaDeDados.question('CONTADOR do INICIAL: ', function(contadorInicial){
            var contadorI = contadorInicial
    
            entradaDeDados.question('CONTADOR do FINAL: ', function(contadorFinal){
                var contadorF = contadorFinal

        
                for (; valorI <= valorF; valorI++) {
                    console.log('Tabuada do ' + valorI)
        
                    for (; contadorI <= contadorF; contadorI++) {
                        resultado = tabuadaInicial * contadorI
                        console.log(`${tabuadaInicial} x ${contadorI} = ${resultado}`)
                    }
                }
        
                
            })
        })
    })
})