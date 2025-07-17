/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var T = parseInt(prompt("Valor T"));
var N = new Array(1000);
var rep = T;
for (var i = 0; i < 1000; i++) {
    if (rep === 0) {
        rep = T;
    }
        N[i] = T - rep;
        console.log(`N[${i}] = ${N[i]}`);
        rep--;
}