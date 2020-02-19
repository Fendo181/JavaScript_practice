import createStatementData from './createStatementData.js';

// jsonファイルを読み込む為の標準ライブラリ
const fs = require('fs');

function statement (invoices, plays) {
  return renderPlainText(createStatementData(invoices, plays));
}

// 請求書を出力する
function renderPlainText (data, plays) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.perfomances) {
    // 注文の内訳を出力
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}) seats \n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `Your earned  ${data.totalVolumeCredits} credits \n`;
  return result;

  function totalAmount (data) {
    return data.perfomances.reduce((total, p) => total + p.amount, 0);
  }
  function totalVolumeCredits (data) {
    return data.perfomances.reduce((total, p) => total + p.volumeCredits, 0);
  }
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

console.log(statement(invoices['0'], plays));
