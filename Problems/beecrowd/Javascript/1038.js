/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var [A, B] = prompt("").split(" ").map(Number);
var valor = [4, 4.5, 5, 2, 1.5];
console.log(`Total: R$ ${(valor[A - 1] * B).toFixed(2)}`);