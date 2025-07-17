/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var par = 0;
for (i = 0; i < 5; i++) {
    var N = parseInt(prompt("Diga o valor."));
    if (N % 2 === 0) {
        par++;
    }
}
console.log(`${par} valores pares`);