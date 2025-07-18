/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = Number(prompt('A'));
var B = Number(prompt('B'));
var C = Number(prompt('C'));
var D = Number(prompt('D'));
var E = Number(prompt('E'));
var F = Number(prompt('F'));

var nump = 0;
var soma = 0;
function numX(x) {
    if (x > 0) {
        nump++;
        soma = soma + parseFloat(x);
    }
}

numX(A);
numX(B);
numX(C);
numX(D);
numX(E);
numX(F);

soma = soma / nump;

console.log(`${nump} valores positivos`);
console.log(`${(parseFloat(soma)).toFixed(1)}`);