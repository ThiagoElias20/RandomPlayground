/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = parseFloat(prompt("Informe a nota A:"));
var B = parseFloat(prompt("Informe a nota B:"));
var M = (A * 3.5 + B * 7.5)/11;
console.log("MEDIA = "+M.toFixed(5));