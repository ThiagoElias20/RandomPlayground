/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var senha = parseInt(prompt("Senha"));
while (senha !== 2002) {
    if (senha !== 2002) {
        console.log("Senha Invalida");
    }
    var senha = parseInt(prompt("Senha"));
    if (senha === 2002) {
        console.log("Acesso Permitido");
    }
}