/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var X = parseInt(prompt("valor X"));
var Y = parseInt(prompt("valor Y"));

if (X < Y) {
    var temp = X;
    X = Y;
    Y = temp;
}

for (var i = Y + 1; i < X; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        console.log(i);
    }
}