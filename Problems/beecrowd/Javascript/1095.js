/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/
var i = 1; var j = 60;
console.log(`I=${i} J=${j}`);
while (j !== 0) {
    j -= 5;
    i += 3;
    console.log(`I=${i} J=${j}`);
}