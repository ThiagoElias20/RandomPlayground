/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = parseFloat(prompt(" "));
var B = parseFloat(prompt(" "));
var C = parseFloat(prompt(" "));

var media = ((A * 2) + (B * 3) + (C * 5)) / 10;
console.log(`MEDIA = ${media.toFixed(1)}`);