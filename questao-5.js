// 5) Escreva um programa que inverta os caracteres de um string.

//RESPOSTA

function inverteString(str) {
  var strin = "";
  for (var i = str.length - 1; i >= 0; i--) {
    strin += str[i];
  }
  return strin;
}
console.log(inverteString("invertendo uma string"));
