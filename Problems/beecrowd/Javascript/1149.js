/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var array = prompt("Valores").split(" ").map(Number);
var A = array[0];
var N = array[array.length - 1];
var res = 0;
for (var i = 0; i < N; i++) {
    res += A + i;
}
console.log(res);