/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = [];
for (var i = 0; i < 100; i++) {
A[i] = Number(prompt(""));
if (A[i] <= 10) {
    console.log(`A[${i}] = ${A[i].toFixed(1)}`);
}
}