const readline = require("readline-sync");

let valor = Number(readline.question("Digite o valor da compra: "));
let valorFinal;

switch (valor >= 100) {
  case true:
    valorFinal = valor * 0.9;
    break;

  default:
    valorFinal = valor;
    break;
}

console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));
