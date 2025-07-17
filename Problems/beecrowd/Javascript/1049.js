/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var entrada1 = prompt("");
var entrada2 = prompt("");
var entrada3 = prompt("");

if (entrada1 == 'vertebrado') {
    if (entrada2 == 'ave') {
        if (entrada3 == 'carnivoro') {
            console.log('aguia');
        } else {
            console.log('pomba');
        }
    } else {
        if (entrada3 == 'onivoro') {
            console.log('homem');
        } else {
            console.log('vaca');
        }
    }
}

if (entrada1 == 'invertebrado') {
    if (entrada2 == 'inseto') {
        if (entrada3 == 'hematofago') {
            console.log('pulga');
        } else {
            console.log('lagarta');
        }
    } else {
        if (entrada3 == 'hematofago') {
            console.log('sanguessuga');
        } else {
            console.log('minhoca');
        }
    }
}