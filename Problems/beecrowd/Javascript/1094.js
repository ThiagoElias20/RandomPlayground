/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt("Diga o número de casos teste."));
var i = 0;
var coelho = 0;
var rato = 0;
var sapo = 0;
var Quantres = 0;
while (i < N) {
    var [Quantia, Tipo] = prompt('Diga a quantia e o tipo um depois do outro').split(' ');
    parseInt(Quantia);
    if (Quantia >= 1 && Quantia <= 15) {
      if (Tipo == 'C') {
        coelho += parseInt(Quantia);
    } else if (Tipo == 'R') {
        rato += parseInt(Quantia);
    } else if (Tipo == 'S') {
        sapo += parseInt(Quantia);
    }
    Quantres += parseInt(Quantia);
 }

    i++;
}
parseInt(coelho);
parseInt(rato);
parseInt(sapo);

console.log(`Total: ${Quantres} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de coelhos: ${((coelho * 100) / Quantres).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((rato * 100) / Quantres).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapo * 100) / Quantres).toFixed(2)} %`);