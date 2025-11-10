
const readline = require("readline-sync");

console.log("=== MINI CALCULADORA ===\n");

let num1 = Number(readline.question("Digite o primeiro numero: "));
let num2 = Number(readline.question("Digite o segundo numero: "));

console.log("\nEscolha a operacao:");
console.log("1 - Soma");
console.log("2 - Subtracao");
console.log("3 - Multiplicacao");
console.log("4 - Divisao\n");

let opcao = readline.question("Digite o numero da operacao desejada: ");
let resultado;

switch (opcao) {
  case "1":
    resultado = num1 + num2;
    console.log(`\nResultado da soma: ${resultado}`);
    break;

  case "2":
    resultado = num1 - num2;
    console.log(`\nResultado da subtracao: ${resultado}`);
    break;

  case "3":
    resultado = num1 * num2;
    console.log(`\nResultado da multiplicacao: ${resultado}`);
    break;

  case "4":
    if (num2 === 0) {
      console.log("\nErro: divisao por zero nao e permitida!");
    } else {
      resultado = num1 / num2;
      console.log(`\nResultado da divisao: ${resultado}`);
    }
    break;

  default:
    console.log("\nOpcao invalida. Tente novamente.");
}