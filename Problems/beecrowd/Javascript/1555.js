/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt("Número inteiro"));

for (var i = 0; i < N; i++) {
    var [x, y] = prompt("X,Y").split(" ").map(Number);
    var r = ((3*x) * (3*x)) + (y * y);
    var b = (2*(x * x)) + (5*y * 5*y);
    var c = -100*x + (y*y*y);

    if (r > b && r > c) {
        console.log("Rafael ganhou");
    } else if (b > r && b > c) {
        console.log("Beto ganhou");
    } else {
        console.log("Carlos ganhou");
    }
}