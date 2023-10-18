
var readline = require('readline')
var funcionalidades = require('./modulo/funcionalidades.js')


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')
console.log(' GERENCIADOR DE NÚMEROS  ')
console.log('━━━━━━━━━ • ✿ • ━━━━━━━━━')

entradaDeDados.question('Digite o primeiro valor: ', function(valorIni){
    vI = valorIni

    entradaDeDados.question('Digite o segundo valor: ', function(valorFin){
      vF = valorFin

      entradaDeDados.question('[1 - Par][2 - Impares][3 - Ambos] ', function(decisaoUsuario){
          decisaoU = decisaoUsuario

          funcionalidades.verificarParEImpar(Number(vI), Number(vF), decisaoU)
      })
    })
})
