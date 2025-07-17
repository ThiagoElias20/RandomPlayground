/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var n = parseInt(prompt("Diga um número menor que 46 e maior que 0."));
var n2 = n;
var i = 0;
const fibonacci = [0, 1];
if (n > 0 && n < 46) {
    for (i = 2; i < n ; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    console.log(fibonacci.join(' '));
}