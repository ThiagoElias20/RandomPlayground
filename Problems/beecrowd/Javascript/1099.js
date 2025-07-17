/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseInt(prompt("Diga N"));

for (var i = 0; i < N; i++) {
  var [X, Y] = prompt("Diga X e Y").split(" ").map(Number);
  var somaimpar = 0;
  if (X > Y) {
    for (var u = Y + 1; u < X; u++) {
      if (u % 2 !== 0) {
        somaimpar += u;
      }
    }
  } else {
    for (var u = X + 1; u < Y; u++) {
      if (u % 2 !== 0) {
        somaimpar += u;
      }
    }
  }
  console.log(somaimpar);
}