'use strict';
// jsonファイルを読み込む為の標準ライブラリ
const fs = require('fs');

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  const format = new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format;

  for (let perf of invoice.perfomances) {
    let thisAmount = amountFor(perf, palyFor(perf));

    // ボリューム特典のポイント換算
    volumeCredits += Math.max(perf.audience - 30.0);
    // comedy は 10人につき、さらにポイント加算
    if (palyFor(perf).type === 'comedy') volumeCredits += Math.floor(perf.audience / 5);
    result += `${palyFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience}) seats \n`;
    totalAmount += thisAmount;
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `Your earned  ${volumeCredits} credits \n`;
  return result;
}

function amountFor (aPerfomance, play) {
  let result = 0;

  // 演劇のタイプによって請求金額を分けている
  switch (palyFor(aPerfomance).type) {
    case 'tragedy' :
      result = 40000;
      if (aPerfomance.audience > 30) {
        result += 1000 * (aPerfomance.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (aPerfomance.audience > 20) {
        result += 10000 + 500 * (aPerfomance.audience - 20);
      }
      result += 300 * aPerfomance.audience;
      break;
    default:
      throw new Error(`unknown type: ${palyFor(aPerfomance).type}`);
  }
  return result;
}

function palyFor (aPerfomance) {
  return plays[aPerfomance.playID];
}

let invoices = JSON.parse(fs.readFileSync('data/invoices.json'));
let plays = JSON.parse(fs.readFileSync('data/plays.json'));

let result = statement(invoices['0'], plays);
console.log(result);
