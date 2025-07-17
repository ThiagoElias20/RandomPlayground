/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var i = 1;
var j = 7;
for (u = 0; u < 15; u++) {
    console.log(`I=${i} J=${j}`);
    j--;
    if (u === 2 || u === 5 || u === 8 || u === 11) {
        i += 2;
        j += 5;
    }
}