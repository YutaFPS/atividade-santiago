const readline = require("readline-sync");

let numeroSecreto = Math.floor(Math.random() * 10) + 1; // número de 1 a 10
let chute = 0;

while (chute !== numeroSecreto) {
  chute = Number(readline.question("Tente adivinhar o numero entre 1 e 10: "));

  if (chute !== numeroSecreto) {
    console.log("❌ Errou! Tente novamente.\n");
  }
}

console.log("acertou", numeroSecreto);