/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var diaInicial = prompt("Dia inicial");
var [dia, dI] = diaInicial.split(" ");

var tempoInicial = prompt("Hora inicial");
var [horainicial, minutoinicial, segundoinicial] = tempoInicial.split(" : ");

var diaFinal = prompt("Dia final");
var [dia2, dF] = diaFinal.split(" ");

var tempoFinal = prompt("Hora final");
var [horafinal, minutofinal, segundofinal] = tempoFinal.split(" : ");

var começoemsegundos = (parseInt(dI) * 86400) + (parseInt(horainicial) * 3600) + (parseInt(minutoinicial) * 60) + parseInt(segundoinicial);
var fimemsegundos = (parseInt(dF) * 86400) + (parseInt(horafinal) * 3600) + (parseInt(minutofinal) * 60) + parseInt(segundofinal);

var eventoemsegundos;
if (fimemsegundos > começoemsegundos) {
  eventoemsegundos = fimemsegundos - começoemsegundos;
} else {
  eventoemsegundos = começoemsegundos - fimemsegundos;
}

var dias = Math.floor(eventoemsegundos / 86400);
eventoemsegundos = eventoemsegundos % 86400;

var horas = Math.floor(eventoemsegundos / 3600);
eventoemsegundos = eventoemsegundos % 3600;

var minutos = Math.floor(eventoemsegundos / 60);
var segundos = eventoemsegundos % 60;

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);