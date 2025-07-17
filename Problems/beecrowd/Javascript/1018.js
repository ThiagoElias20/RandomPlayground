/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var A = Math.floor(prompt(" "));
console.log(A);
var cedulas = [100, 50, 20, 10, 5, 2, 1]; 
for (var i = 0; i < cedulas.length; i++) {
    var qtdcedl = Math.floor(A / cedulas[i]);
    console.log(`${qtdcedl} nota(s) de R$ ${cedulas[i]},00`);
    A = A % cedulas[i];
}