let vetor = [3, 7, 2, 8, 5];
let contPares = 0;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        contPares++;
    }
}
console.log("Quantidade de números pares:", contPares);