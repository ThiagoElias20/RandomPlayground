/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};

var maiorvalor = 0, posicao;
for (var i = 0; i < 100; i++) {
    var num = Number(prompt("numero"));
    if (num > maiorvalor) {
        maiorvalor = num;
        posicao = i;
    }
}
console.log(maiorvalor);
console.log(posicao + 1);