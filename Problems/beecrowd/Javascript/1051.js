/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var entrada = parseFloat(prompt(""));
var imposto;
if (entrada >= 0 && entrada <= 2000) {
    console.log('Isento');
} else if (entrada > 2000.00 && entrada <= 3000) {
    console.log(`R$ ${((entrada - 2000) * 0.08).toFixed(2)}`);
} else if (entrada > 3000.00 && entrada <= 4500) {
    console.log(`R$ ${(((entrada - 3000) * 0.18) + 80).toFixed(2)}`);
} else if (entrada > 4500) {
    console.log(`R$ ${(((entrada - 4500) * 0.28) + 350).toFixed(2)}`);
} 