/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt("valor N"));
var cont = 0;
var num = 0;
while (cont <= 10000) {
    num++;
    if (num % N === 2) {
        console.log(num);
    }
    cont++;
}