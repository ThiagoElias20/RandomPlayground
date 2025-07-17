/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

while (true) {
    var [X, Y] = prompt("Diga as coordenadas de X e Y").split(" ").map(Number);
    if (X > 0 && Y > 0) {
    console.log("primeiro");
} else if (X < 0 && Y > 0) {
    console.log("segundo");
} else if (X < 0 && Y < 0) {
    console.log("terceiro");
} else if (X > 0 && Y < 0) {
    console.log("quarto");
}
if (X === 0 || Y === 0) {
    break;
}
}