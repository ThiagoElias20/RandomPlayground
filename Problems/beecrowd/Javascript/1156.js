/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var res = 0;
var denominador = 2;
for (var i = 3; i <= 39; i += 2) {
    res += i/denominador;
    denominador *= 2;
}
res++
console.log(res.toFixed(2));