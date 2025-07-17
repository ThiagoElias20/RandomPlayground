/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var x = parseInt(prompt("valor x"));
var y = parseInt(prompt("valor y"));
var res = 0;
        for (x = x; x < y; x++) {
            if (x % 2 !== 0) {
                res += x;
            }
        }
        for (y = y + 1; y < x; y++) {
            if (y % 2 !== 0) {
                res += y;
            }
        }
console.log(res);