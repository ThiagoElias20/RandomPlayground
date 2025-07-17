/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var X = parseInt(prompt("Valor X")); var Y = parseInt(prompt("Valor Y")); var res = 0;
if (X < Y) {
    while (X <= Y) {
        if (X % 13 !== 0) {
            res += X;
        }
        X++;
    }
}
else if (Y < X) {
    while (Y <= X) {
        if (Y % 13 !== 0) {
            res += Y;
        }
        Y++;
    }
}
console.log(res);