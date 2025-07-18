/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var [A, B, C] = prompt("").split(" ");
parseInt(A);
parseInt(B);
parseFloat(C);
var [D, E, F] = prompt("").split(" ");
parseInt(D);
parseInt(E);
parseFloat(F);
var res = (B * C) + (E * F);
console.log(`VALOR A PAGAR: R$ ${res.toFixed(2)}`);