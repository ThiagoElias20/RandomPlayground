/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var casos = parseInt(prompt("Números de casos teste"));
for (var i = 0; i < casos; i++) {
    var N = parseInt(prompt("N"));
    var fibo = [0, 1];
    for (var cont = 0; cont < N; cont++) {
        fibo.push(fibo[cont] + fibo[cont + 1]);
    }
    if (cont >= N) {
        console.log(`Fib(${N}) = ${fibo[cont]}`);
    }
}