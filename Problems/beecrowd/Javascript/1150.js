/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var X = parseInt(prompt("Valor X"));
var Z = parseInt(prompt("Valor Z"));
var i = 1;
var sum = X;
while (Z <= X) {
    Z = parseInt(prompt("Fale de Z denovo"));
}
while (X <= Z) {
    sum++;
    X += sum;
    i++;
}
console.log(i);