/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt("Quantidade de entradas"));
var i = 0;

if (N >= 1 && N <= 100) {
    while (i < N) {
        var X = parseInt(prompt("Escreva um número"));
        if (X >= 1 && X <= 10000000) {
            var cont = 0;
            var t = 1;
            while (t <= X) {
                if (X % t === 0) {
                    cont++;
                }
                t++;
            }
        }
        i++;
        if (cont === 2 ) {
            console.log(`${X} eh primo`);
        } else {
            console.log(`${X} nao eh primo`);
        }
    }
}