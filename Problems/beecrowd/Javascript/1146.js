/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var X = parseInt(prompt("Valor X"));
var resfinal = '';
while (X !== 0) {
    i = 1;
    while (i <= X) {
        if (i < X) {
            resfinal += i + ' ';
        } else if (i === X) {
            resfinal += i;
        }
        i++;
    }
    console.log(resfinal);
    i = 0;
    var resfinal = '';
    var X = parseInt(prompt("Valor X"));
}