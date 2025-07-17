/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = parseInt(prompt("tempo"));
var B = parseInt(prompt("velocida media"));
var distperco = A * B;
var res = distperco / 12;
console.log(res.toFixed(3));