'use strict';
// jsonファイルを読み込む為の標準ライブラリ
const fs = require('fs');

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.perfomances) {
    // ボリューム特典のポイント計算
    volumeCredits += volumeCreditsFor(perf);
    // 注文の内訳を出力
    result += `${palyFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}) seats \n`;
    // 請求金額の計算
    totalAmount += amountFor(perf);
  }

  result += `Amount owed is ${usd(totalAmount)}\n`;
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
function volumeCreditsFor (aPerfomance) {
  let result = 0;
  // ボリューム特典のポイント換算
  result += Math.max(aPerfomance.audience - 30.0);
  // comedy は 10人につき、さらにポイント加算
  if (palyFor(aPerfomance).type === 'comedy') result += Math.floor(aPerfomance.audience / 5);
  return result;
}

// formatをUSDにする
function usd (aNumber) {
  return new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(aNumber / 100);
}

let invoices = JSON.parse(fs.readFileSync('data/invoices.json'));
let plays = JSON.parse(fs.readFileSync('data/plays.json'));

let result = statement(invoices['0'], plays);
console.log(result);
