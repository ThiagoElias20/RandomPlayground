/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var i = 0;
var soma = 0;
var cont = 1;
while (cont > 0) {
    var idade = parseInt(prompt("idade"));
    if (idade >= 0) { 
        soma += idade;
        i++;
    } else {
        break;
    }
}
var media = soma / i;
console.log(media.toFixed(2));