
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

let arrayFinal = [];
let n = parseInt(prompt("Digite a quantidade de strings:"));

for (let j = 0; j < n; j++) {
    let stringNova = prompt("String nova:");
    let stringCortada = stringNova.split(" ");

    // Ordena as palavras dentro da string com base no comprimento
    stringCortada.sort((a, b) => b.length - a.length);

    // Adiciona a string ordenada ao array final
    arrayFinal.push(stringCortada.join(" "));
    
}

// Exibe cada string no console
for (let i = 0; i < arrayFinal.length; i++) {
    console.log(arrayFinal[i]);
}

