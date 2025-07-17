/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var M = new Array(12);
var coluna = parseInt(prompt("Qual a coluna a ser selecionada?"));
var seletor = prompt("Qual o Seletor?");
var soma = 0;
var media = 0;

for (var L = 0; L < 12; L++) {
    M[L] = new Array(12);
    for (var C = 0; C < 12; C++) {
        M[L][C] = parseFloat(prompt("Digite o número:"));
        if (C === coluna) {
            soma += M[L][C];
        }
    }
}

if (seletor == 'S') {
    console.log(soma.toFixed(1));
} else if (seletor == 'M') {
    media = soma / 12;
    console.log(media.toFixed(1));
}