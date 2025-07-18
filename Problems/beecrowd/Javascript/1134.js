/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var alcool = 0;
var gasolina = 0;
var diesel = 0;
var i = 0;

    var cod = parseInt(prompt("Diga o codigo"));
    if(cod !== 4) {
        while (i < 1) {
            var cod = parseInt(prompt("Diga o codigo"));
            if (cod === 1) {
            alcool++;
        } else if (cod === 2) {
            gasolina++;
        } else if (cod === 3) {
            diesel++;
        } else if (cod === 4) {
            console.log('MUITO OBRIGADO');
            console.log(`Alcool: ${alcool}`);
            console.log(`Gasolina: ${gasolina}`);
            console.log(`Diesel: ${diesel}`);
            i++;
        } 
        }
    }