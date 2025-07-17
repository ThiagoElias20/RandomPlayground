/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt(""));
var minutos = 0;
var horas = 0;

while (N >= 60) {
    minutos++;
    N -= 60;
    if (minutos >= 60) {
        horas++;
        minutos -= 60;
    }
}

console.log(`${horas}:${minutos}:${N}`);