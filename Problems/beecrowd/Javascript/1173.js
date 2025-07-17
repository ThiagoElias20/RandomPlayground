/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = [];
var dobro = 0;
var V = parseInt(prompt("valor"));
for (var i = 0; i < 10; i++) {
    if (i === 0) {
        N[0] = V;
    }
    if (i > 0) {
        N[i] = dobro;
    }
    dobro = N[i] * 2;
    console.log(`N[${i}] = ${N[i]}`);
}