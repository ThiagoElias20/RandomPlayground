/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

for (var [M, N] = prompt("Digite os valores de M e N:").split(" ").map(Number); M > 0 && N > 0;) {
    var sequencia = "";
    var sum = 0;
    if (M >= N) {
        for (; M >= N; N++) {
            sequencia += N + " ";
            sum += N;
        }
        console.log(`${sequencia}Sum=${sum}`);
    } else if (N >= M) {
        for (; N >= M; M++) {
            sequencia += M + " ";
            sum += M;
        }
        console.log(`${sequencia}Sum=${sum}`);
    }
    [M, N] = prompt("Digite os valores de M e N:").split(" ").map(Number);
}