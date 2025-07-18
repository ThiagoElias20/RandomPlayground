/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var pdnv = 1; var grenais = 0; var vitInt = 0; var vitGrem = 0; var empates = 0;
while (pdnv === 1) {
var [Inter, Gremio] = prompt("Diga o resultado do jogo.").split(" ").map(Number);
if (Inter > Gremio) {
    vitInt++;
} else if (Gremio > Inter) {
    vitGrem++;
} else if (Gremio === Inter) {
    empates++;
}
grenais++;
console.log("Novo grenal (1-sim 2-nao)");
pdnv = parseInt(prompt("Novo grenal?"));
if (pdnv === 2) {
console.log(`${grenais} grenais`);
console.log(`Inter:${vitInt}`);
console.log(`Gremio:${vitGrem}`);
console.log(`Empates:${empates}`);
if (vitInt > vitGrem) {
    console.log("Inter venceu mais");
} else if (vitGrem > vitInt) {
    console.log("Gremio venceu mais");
} else if (vitGrem === vitInt) {
    console.log("Nao houve vencedor");
        }
    }
}