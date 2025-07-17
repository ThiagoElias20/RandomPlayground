/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt("valor N"));
var i = 1;
for (cont = 1; cont <= N; cont++) {
    var val1 = i;
    i += 1;
    var val2 = i;
    i += 1;
    var val3 = i;
    console.log(`${val1} ${val2} ${val3} PUM`);
    i += 2;
}