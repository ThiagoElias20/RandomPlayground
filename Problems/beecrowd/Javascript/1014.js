/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var X = parseInt(prompt(" "));
var Y = parseFloat(prompt(" "));
var res = X / Y;
console.log(`${res.toFixed(3)} km/l`);