/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var [N1, N2, N3, N4] = prompt("").split(" ").map(Number);
var media = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;
console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7) {
    console.log("Aluno aprovado.");
} else if (media < 5) {
    console.log("Aluno reprovado.");
} else if (media >= 5 && media <= 6.9) {
    console.log("Aluno em exame.");
    var notaexame = parseFloat(prompt(""));
    console.log(`Nota do exame: ${notaexame.toFixed(1)}`);
    var resfinal = (notaexame + media) / 2;
    if (resfinal >= 5) {
        console.log("Aluno aprovado.");
        console.log(`Media final: ${resfinal.toFixed(1)}`);
    } else if (resfinal <= 4.9) {
        console.log("Aluno reprovado.");
        console.log(`Media final: ${resfinal.toFixed(1)}`);
    }
}