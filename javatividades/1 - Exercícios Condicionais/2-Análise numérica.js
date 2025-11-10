let numero = 1;

switch (Math.sign(numero)) {
  case 1:
    console.log("número positivo");
    break;
  case -1:
    console.log("número negativo");
    break;
  case 0:
    console.log("O número é igual a zero");
    break;
  default:
    console.log("inválido");
}