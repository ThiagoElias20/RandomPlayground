/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var nome = prompt("nome");
var salariofx = parseFloat(prompt(""));
var montante = parseFloat(prompt(""));

var comiss = montante * 0.15;
var total = comiss + salariofx;
console.log(`TOTAL = R$ ${total.toFixed(2)}`);