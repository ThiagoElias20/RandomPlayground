/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var novocalc = 1;

while (novocalc === 1) {
    var nota1 = Number(prompt("Digite a primeira nota:"));
    while (nota1 < 0 || nota1 > 10) {
        console.log("nota invalida");
        nota1 = Number(prompt("Digite a primeira nota novamente:"));
    } 
    var nota2 = Number(prompt("Digite a segunda nota:"));
    while (nota2 < 0 || nota2 > 10) {
        console.log("nota invalida");
        nota2 = Number(prompt("Digite a segunda nota novamente:"));
    }
    var media = (nota1 + nota2) / 2;
    console.log(`media = ${media.toFixed(2)}`);
    console.log("novo calculo (1-sim 2-nao)");
    novocalc = parseInt(prompt("Deseja realizar um novo cálculo?"));
    while (novocalc !== 2 && novocalc !== 1) {
        console.log("novo calculo (1-sim 2-nao)");
        novocalc = parseInt(prompt("Deseja realizar um novo cálculo?"));
    }
}