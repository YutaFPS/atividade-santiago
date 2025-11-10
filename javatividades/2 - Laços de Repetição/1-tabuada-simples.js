const readline = require("readline-sync");

let numero = Number(readline.question("Digite um numero para ver sua tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}