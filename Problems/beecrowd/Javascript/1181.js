/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var M = new Array(12);
var linha = parseInt(prompt("Qual a linha a ser feita?"));
var seletor = prompt("Qual o Seletor?");
var res = 0;
var C, Lselecionada;
for (L = 0; L < 12; L++) {
    M[L] = new Array(12);
    if (L === linha) {
        Lselecionada = L;
    }
    for (C = 0; C < 12; C++) {
        M[L][C] = parseFloat(prompt("diga o número"));
    }
}
if (seletor == 'S') {
    for (i = 0; i < 12; i++) {
        res += M[Lselecionada][i];
    }
    console.log(res.toFixed(1));
} else if (seletor == 'M') {
    for (i = 0; i < 12; i++) {
        res += M[Lselecionada][i];
    }
    console.log((res / 12).toFixed(1));
}