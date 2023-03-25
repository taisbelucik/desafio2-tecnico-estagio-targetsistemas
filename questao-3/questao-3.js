// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

//ATENÇÃO, ABRIR COM LIVE SERVER PARA NÃO DAR ERRO DE CORS

const dados = [];

function removeFeriadosFds(data) {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.valor !== 0) {
      dados.push(element);
    }
  }
}

function menorValorFaturamentoMes() {
  const valores = [];

  dados.forEach((element) => {
    valores.push(element.valor);
  });

  let menorValor = 0;
  menorValor = Math.min(...valores);
  return console.log(menorValor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}), " - Menor valor faturado no mês");
}

function maiorValorFaturamentoMes() {
  const valores = [];

  dados.forEach((element) => {
    valores.push(element.valor);
  });

  let maiorValor = 0;
  maiorValor = Math.max(...valores);
  return console.log(maiorValor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}), " - Maior valor faturado no mês");
}

function mediaMensal() {
  const NUMERO_DIAS_UTEIS_MES = 21;
  let soma = 0;
  dados.forEach((element) => {
    soma += element.valor;
  });
  return soma / NUMERO_DIAS_UTEIS_MES;
}

function diasFaturamentoMaiorMediaMensal() {
  let dias = 0;
  const media = mediaMensal();
  dados.forEach((element) => {
    if (element.valor > media) {
      dias++;
    }
  });
  return console.log(dias, " - Quantidade de dias que o faturamento foi maior que a média do mês");
}

fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    removeFeriadosFds(data);
    menorValorFaturamentoMes();
    maiorValorFaturamentoMes();
    mediaMensal();
    diasFaturamentoMaiorMediaMensal();
  })
  .catch((error) => console.log(error));
