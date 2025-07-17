/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/
 var N = parseInt(prompt("Diga valor de N"));
 var blocobranco = 2;
 var blocopreto = 2;
 var total = N * N;
    if (N % 2 === 0) {
        blocopreto = total / 2;
        blocobranco = total / 2;
    } else {
        blocopreto = Math.floor(total /2);
        blocobranco = Math.floor((total / 2) + 1);
    }

console.log(`${blocobranco} casas brancas e ${blocopreto} casas pretas`);