// <!-- 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; -->

//RESPOSTA
const num = 2584;
const isFibonacci = (num) => {
  if (num === 0 || num === 1) {
    return true;
  }
  let prev = 1;
  let count = 2;
  let temp = 0;
  while (count <= num) {
    if (prev + count === num) {
      return true;
    }
    temp = prev;
    prev = count;
    count += temp;
  }
  return false;
};

const resultado = isFibonacci(num);

if (resultado === true) {
  console.log("Esse número faz parte de uma sequencia fibonacci");
} else {
  console.log("Esse número não faz parte de uma sequencia fibonacci");
}
