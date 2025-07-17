/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var X = parseInt(prompt("valor x"));
var cont = 1;

while (cont <= 6) {
    if (X % 2 !== 0) {
        console.log(X);
        cont++;
    }
    X++;
}
