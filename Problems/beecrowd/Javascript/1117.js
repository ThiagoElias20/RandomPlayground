/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var i = 0;
var med1 = 0 
while (i < 2) {
 var nota = Number(prompt("Diga a nota"))
 if (nota >= 0 && nota <= 10) {
 med1 += nota
 i++;
 } else {
     console.log("nota invalida")
 }
}
var media = med1 / 2;
console.log(`media = ${media.toFixed(2)}`);