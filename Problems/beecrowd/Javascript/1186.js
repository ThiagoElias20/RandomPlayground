/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var M = new Array(12);
var O = prompt("Soma ou Media?");
var som = 0;
var d = 0;
var cont = 0;
for (L = 0; L < 12; L++) {
    M[L] = new Array(12);
    for (C = 0; C < 12; C++) {
        M[L][C] = parseFloat(prompt("Insira um número"));
    }
}
if (O === "S") {
        for (C = 11; C >= 0; C--) {
            for (L = 1 + cont; L < 12; L++) {
                som += M[L][C]; 
            }
            cont++;
        }
    console.log(som.toFixed(1));
} else if (O === "M") {
    for (C = 11; C >= 0; C--) {
            for (L = 1 + cont; L < 12; L++) {
                som += M[L][C]; 
                d++;
            }
            cont++;
        }
    console.log((som / d).toFixed(1));
}