/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

let N = parseInt(prompt(""));
for (let i = 1; i <= N; i++) {
    let [X, Y] = prompt("X e Y").split(" ").map(Number);
    let soma = 0;
    for (let imp = 0; imp < Y;) {
        //Esse loop for vai ser responsavel por contabilizar as vezes que foi colocado um novo impar    
        if (X % 2 !== 0) { //significa que é impar
            soma += X;
            imp++;
        }
        X++;
    }
   console.log(soma);
}