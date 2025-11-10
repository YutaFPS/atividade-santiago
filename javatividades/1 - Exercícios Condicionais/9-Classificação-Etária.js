const readline = require("readline-sync");

let idade = Number(readline.question("diga sua idade: "));

switch (true) {
  case (idade >= 0 && idade <= 12):
    console.log("anão de jardim kkkkk.");
    break;

  case (idade >= 13 && idade <= 17):
    console.log("volta pro tiktok.");
    break;

  case (idade >= 18 && idade <= 59):
    console.log("adulto.");
    break;

  case (idade >= 60 && idade <= 100):
    console.log("vovô?.");
    break;

  case (idade < 0):
    console.log("rapaz, cabou de nascer e já ta digitando aqui?kkkkkk");
    break;

  case (idade > 100):
    console.log("é um ancião(a)!kkkkkk");
    break;

  default:
    console.log("Idade invalida.");
}

