/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

let X = parseInt(prompt());
while (X !== 0) {
    let count = 0;
    let res = 0;

    while (count < 5) {
        if (X % 2 === 0) {
            res += X;
            count++;
        }
        X++;
    }
    console.log(res);
    X = parseInt(prompt());
}