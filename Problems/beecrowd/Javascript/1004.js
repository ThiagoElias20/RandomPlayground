/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = parseInt(prompt(""));
var B = parseInt(prompt(""));
var PROD = A * B;
console.log(`PROD = ${PROD}`);