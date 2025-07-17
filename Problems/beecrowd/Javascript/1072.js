/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

   var N = parseInt(prompt("valor N"));
   var cont = 1;
   var xin = 0;
   var xout = 0;
   while (cont <= N) {
    var X = parseInt(prompt(`Valor X${cont}`));
    if (X >= 10 && X <= 20 ) {
        xin++;
    } else {
        xout++;
    }
    cont++;
   }
   console.log(`${xin} in`);
   console.log(`${xout} out`);