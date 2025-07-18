/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt('numero de casos de teste'));
var cont = 1;
while (cont <= N) {
    cont++;
    var [A, B, C] = prompt("Valor A, B, C").split(' ').map(parseFloat);
    console.log(`${(((A * 2) + (B * 3) + (C * 5)) / 10).toFixed(1)}`);
}