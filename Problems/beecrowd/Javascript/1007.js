/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = parseInt(prompt(' '));
var B = parseInt(prompt(' '));
var C = parseInt(prompt(' '));
var D = parseInt(prompt(' '));
var diferenca = (A * B - C * D);

console.log(`DIFERENCA = ${diferenca}`);