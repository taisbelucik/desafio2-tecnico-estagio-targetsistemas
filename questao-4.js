// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const sp = 67.83643;
const rj = 36.67866;
const mg = 29.22988;
const es = 27.16548;
const out = 19.84953;
const total = sp + rj + mg + es + out;

const psp = (sp / total) * 100;
const prj = (rj / total) * 100;
const pmg = (mg / total) * 100;
const pes = (es / total) * 100;
const pout = (out / total) * 100;

const fsp = psp.toFixed(2);
const frj = prj.toFixed(2);
const fmg = pmg.toFixed(2);
const fes = pes.toFixed(2);
const fout = pout.toFixed(2);

console.log(`A porcentagem de SP é ${fsp}`);
console.log(`A porcentagem de RJ é ${frj}`);
console.log(`A porcentagem de MG é ${fmg}`);
console.log(`A Porcentagem de ES é ${fes}`);
console.log(`A porcentagem de OUT é ${fout}`);
