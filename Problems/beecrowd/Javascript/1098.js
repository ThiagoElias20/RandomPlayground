/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

for (let i = 0; i <= 2; i += 0.2) {
  for (let j = 1; j <= 3; j++) {
    if(i===0||i===1||i>1.9){
        console.log(`I=${Math.round(i)} J=${Math.round((j + i))}`);
        } else{
            console.log(`I=${(i.toFixed(1))} J=${(j + i).toFixed(1)}`);
        }
  }
}