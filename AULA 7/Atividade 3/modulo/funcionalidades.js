const calculoTabuada = function(valorTabuada1, valorTabuada2, multiplicador1, multiplicador2) {
    let resultado1, resultado2;


            console.log('Tabuada do [' + valorTabuada1 + ']');
            for (let i = 0; (Number(i) + Number(multiplicador1)) <= (multiplicador2); i++) {
                resultado1 = valorTabuada1 * (Number(multiplicador1) + Number(i));
                console.log(valorTabuada1 + 'x' + (Number(multiplicador1) + Number(i)) + ' = ' + resultado1);
            }

            console.log('Tabuada do [' + valorTabuada2 + ']');
            for (let i = 0; (Number(i) + Number(multiplicador1)) <= (multiplicador2); i++) {
                resultado2 = valorTabuada2 * (Number(multiplicador1) + Number(i));
                console.log(valorTabuada2 + 'x' + (Number(multiplicador1) + Number(i)) + ' = ' + resultado2);
            }
            return true;
    
};

module.exports = {
    calculoTabuada
};