/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var [A, B, C] = prompt(" ").split(" ");
parseInt(A);
parseInt(B);
parseInt(C);
console.log(`${Math.max(A, B, C)} eh o maior`);