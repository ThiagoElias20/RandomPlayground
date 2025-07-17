/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var R = parseFloat(prompt("Qual o valor do raio?"));
console.log(`A=${(3.14159 * Math.pow(R, 2)).toFixed(4)}`);