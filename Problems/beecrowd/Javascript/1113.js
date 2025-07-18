/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/
var [X, Y] = prompt("Diga X e Y").split(" ").map(Number);
while (X !== Y) {
    if (X > Y) {
        console.log("Decrescente");
    } else if (Y > X) {
        console.log("Crescente");
    }
    var [X, Y] = prompt("Diga X e Y").split(" ").map(Number);
}