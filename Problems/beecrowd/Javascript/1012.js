/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var [A, B, C] = prompt(" ").split(" ").map(parseFloat);

var tri = (A * C) / 2;
console.log(`TRIANGULO: ${tri.toFixed(3)}`);

var circ = 3.14159 * Math.pow(C, 2);
console.log(`CIRCULO: ${circ.toFixed(3)}`);

var trap = ((A + B) * C) / 2;
console.log(`TRAPEZIO: ${trap.toFixed(3)}`);

var quad = Math.pow(B , 2);
console.log(`QUADRADO: ${quad.toFixed(3)}`);

var ret = A * B;
console.log(`RETANGULO: ${ret.toFixed(3)}`);