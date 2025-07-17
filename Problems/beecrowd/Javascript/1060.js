/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var num = [];
var pos = 0;
for (i = 0; i < 6; i++) {
    num[i] = Number(prompt("Números"));
    if (num[i] === 0) {
        num[i] = Number(prompt("Números")); 
    }
    if (num[i] > 0) {
        pos++;
    }
}
console.log(`${pos} valores positivos`);