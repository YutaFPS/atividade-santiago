const readline = require("readline-sync");

let numero = Number(readline.question("Digite um numero: "));

switch (numero) {
  case 2:
  case 4:
  case 6:
  case 8:
  case 10:
    console.log("✅");
    break;

  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
    console.log("🔢 O numero e impar!");
    break;

  default:
    console.log("⚠️ Numero invalido! Digite entre 1 e 10.");
    break;
}
