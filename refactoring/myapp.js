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
    // ボリューム特典のポイント計算
    volumeCredits += volumeCreditsFor(perf);
    // 請求金額の計算
    totalAmount += amountFor(perf);
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `Your earned  ${volumeCredits} credits \n`;
  return result;
}

// 演劇のタイプによって請求金額を分けている
function amountFor (aPerfomance) {
  let result = 0;

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

// ポイント計算
function volumeCreditsFor (perf) {
  let volumeCredits = 0;
  // ボリューム特典のポイント換算
  volumeCredits += Math.max(perf.audience - 30.0);
  // comedy は 10人につき、さらにポイント加算
  if (palyFor(perf).type === 'comedy') volumeCredits += Math.floor(perf.audience / 5);
  return volumeCredits;
}

let invoices = JSON.parse(fs.readFileSync('data/invoices.json'));
let plays = JSON.parse(fs.readFileSync('data/plays.json'));

let result = statement(invoices['0'], plays);
console.log(result);
