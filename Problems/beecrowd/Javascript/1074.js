/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt(" "));
var res1, res2, res;

for (var i = 0; i < N; i++) {
    var x = parseInt(prompt("x"));
    if (x === 0) {
        console.log("NULL");
    }
    if (x % 2 == 0 && x !== 0) {
        res1 = "EVEN";
    } else  {
        res1 = "ODD";
    }
    if (x > 0) {
        res2 = "POSITIVE";
        console.log(`${res1} ${res2}`);
    } else if (x < 0) {
        res2 = "NEGATIVE";
        console.log(`${res1} ${res2}`);
    }
}