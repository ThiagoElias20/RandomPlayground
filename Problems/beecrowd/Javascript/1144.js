/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt("Valor N"));
var cont = 1;
for (i = 1; i <= N; i++) {
console.log(`${i} ${i * i} ${i * i * i}`);
console.log(`${i} ${(i * i) + 1} ${(i * i * i) + 1}`);
}