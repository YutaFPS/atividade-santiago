const readline = require("readline-sync");

let a = Number(readline.question("Informe o valor do Primeiro lado do triangulo (maior que zero): "));
let b = Number(readline.question("Informe o valor do Segundo lado do triangulo (maior que zero): "));
let c = Number(readline.question("Informe o valor do Terceiro lado do triangulo (maior que zero): "));

if (a + b > c && a + c > b && b + c > a) {
  
  if (a === b && b === c) {
    console.log("Triangulo equilatero"); // todos os lados iguais
  } else if (a === b || a === c || b === c) {
    console.log("Triangulo isosceles"); // dois lados iguais
  } else {
    console.log("Triangulo escaleno"); // todos os lados diferentes
  }
} else {
  console.log("Nao e possivel formar um triangulo com essas medidas.");
}