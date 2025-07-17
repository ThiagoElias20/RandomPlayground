/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var vals = [];
var res = [];
var [X, Y] = prompt("Valor X e Y").split(" ").map(Number);
var resfinal = [];

for (var i = 1; i <= Y; i++) {
    resfinal[i] = "";
    for (var u = 0; u < X; u++) {
        vals[u] = i + u;
        res[u] = `${vals[u]}`;
        if (u < X - 1) {
            resfinal[i] += res[u] + " ";
        } else {
            resfinal[i] += res[u];
        }
    }
    console.log(resfinal[i]);
    i += X - 1;
}