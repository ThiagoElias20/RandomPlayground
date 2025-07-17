/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var N = parseFloat(prompt("Valor N")).toFixed(2);
var dinheiro = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.5, 0.25, 0.10, 0.05, 0.01];
var valores = [0, 0, 0, 0, 0, 0];
var tipos = ["nota(s)", "moeda(s)"];

console.log("NOTAS:");
for (var i = 0; i < dinheiro.length; i++) {
  var quantidade = Math.floor(N / dinheiro[i]);
  N -= quantidade * dinheiro[i];
  valores[i] = quantidade;
  console.log(`${valores[i]} ${tipos[0]} de R$ ${dinheiro[i]}.00`);
}

console.log("MOEDAS:");
N += 0.0001;
for (var i = 0; i < moedas.length; i++) {
  var quantidade = Math.floor(N / moedas[i]);
  N -= quantidade * moedas[i];
  valores[i] = quantidade;
  console.log(`${valores[i]} ${tipos[1]} de R$ ${moedas[i].toFixed(2)}`);
}