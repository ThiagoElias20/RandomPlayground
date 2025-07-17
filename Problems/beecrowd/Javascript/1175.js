/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = [];
var i = 0;
for (var el = 19; el > -1; el--) {
    var val = parseInt(prompt(" "));
    N[el] = val;
}
if (N.length === 20) {
    el = 19;
    while (el > -1) {
        console.log(`N[${i}] = ${N[i]}`);
        el--;
        i++;
    }
} 