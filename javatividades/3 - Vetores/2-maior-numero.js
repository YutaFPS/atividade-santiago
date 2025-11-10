let vetor = [3, 7, 2, 8, 5];
let maior = vetor[0];

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
}
console.log("Maior número do vetor:", maior);