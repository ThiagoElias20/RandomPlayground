/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var M = new Array(12);
var O = prompt("Soma ou Media?");
var som = 0;
var d = 0;
for (L = 0; L < 12; L++) {
    M[L] = new Array(12);
    for (C = 0; C < 12; C++) {
        M[L][C] = parseFloat(prompt("Insira um número"));
    }
}
if (O === "S") {
    for (L = 0; L < 12; L++) {
        for (C = L + 1; C < 12; C++) {
            som += M[L][C];  
        }
    }
    console.log(som.toFixed(1));
} else if (O === "M") {
    for (L = 0; L < 12; L++) {
        for (C = L + 1; C < 12; C++) {
            som += M[L][C];
            d++;
        }
    }
    console.log((som / d).toFixed(1));
}