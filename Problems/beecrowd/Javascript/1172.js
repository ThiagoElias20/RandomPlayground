/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/
var n = 0;
var X = [0];
while (n < 10) {
X[n] = parseInt(prompt(" "));
if(X[n] < 0 || X[n] === 0) {
    X[n] = 1;
}
console.log(`X[${n}] = ${X[n]}`);
n++;
}