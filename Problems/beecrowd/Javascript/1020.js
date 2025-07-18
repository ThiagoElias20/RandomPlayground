/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var idade = parseInt(prompt(" "));
var ano = 365;
var mes = 30;
var idadereal;
var idano = 0;
var idmes = 0;
var iddia = 0;

while (idade !== 0) {
    if (idade >= 365) {
        while (idade >= 365) {
            idade -= 365;
            idano++;
        }
    } else if (idade >= 30 && idade < 365) {
        while (idade >= 30 && idade < 365) {
            idade -= 30;
            idmes++;
        }
    } else if (idade < 30) {
        while (idade < 30 && idade !== 0) {
            idade -=  1;
            iddia++;
        }
    }

}
console.log(`${idano} ano(s)`);
console.log(`${idmes} mes(es)`);
console.log(`${iddia} dia(s)`);