'use strict';
// jsonファイルを読み込む為の標準ライブラリ
const fs = require('fs');

class PerformanceCalculator {
  constructor (aPerfomance, aPlay) {
    this.perfomance = aPerfomance;
    this.play = aPlay;
  }

  get amount () {
    let result = 0;
    switch (this.play.type) {
      case 'tragedy' :
        result = 40000;
        if (this.perfomance.audience > 30) {
          result += 1000 * (this.perfomance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (this.perfomance.audience > 20) {
          result += 10000 + 500 * (this.perfomance.audience - 20);
        }
        result += 300 * this.perfomance.audience;
        break;
      default:
        throw new Error(`unknown type: ${this.play.type}`);
    }
    return result;
  }
}

function createStatementData (invoice, plays) {
  const statementDate = {};
  // 顧客情報
  statementDate.customer = invoice.customer;
  // 公演情報
  statementDate.perfomances = invoice.perfomances.map(enrichPerfomance);
  // 合計した請求金額
  statementDate.totalAmount = totalAmount(statementDate);
  // 合計したボリューム特典のポイント額
  statementDate.totalVolumeCredits = totalVolumeCredits(statementDate);
  return renderPlainText(statementDate, plays);

  // シャローコピーを使って中間オブジェクトからデータを取得できるようにする
  // オブジェクトからプロパティ指定で取得できるようにする
  function enrichPerfomance (aPerfomance) {
    const calculator = new PerformanceCalculator(aPerfomance, playFor(aPerfomance));
    const result = Object.assign({}, aPerfomance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor (aPerfomance) {
    return plays[aPerfomance.playID];
  }

  // 演劇のタイプによって請求金額を分けている
  function amountFor (aPerfomance) {
    return new PerformanceCalculator(aPerfomance, playFor(aPerfomance)).amount;
  }

  // ポイント計算
  function volumeCreditsFor (aPerfomance) {
    let result = 0;
    // ボリューム特典のポイント換算
    result += Math.max(aPerfomance.audience - 30.0);
    // comedy は 10人につき、さらにポイント加算
    if (aPerfomance.play.type === 'comedy') result += Math.floor(aPerfomance.audience / 5);
    return result;
  }

  // 請求金額の合計計算
  function totalAmount (data) {
    let result = 0;
    for (let perf of data.perfomances) {
      // 請求金額の計算
      result += perf.amount;
    }
    return result;
  }

  // ポイントの合計計算
  function totalVolumeCredits (data) {
    let volumeCredits = 0;
    for (let perf of data.perfomances) {
    // ボリューム特典のポイント計算
      volumeCredits += perf.volumeCredits;
    }
    return volumeCredits;
  }
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

  // formatをUSDにする
  function usd (aNumber) {
    return new Intl.NumberFormat('en-US',
      {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      }).format(aNumber / 100);
  }

  function totalAmount (data) {
    return data.perfomances.reduce((total, p) => total + p.amount, 0);
  }
  function totalVolumeCredits (data) {
    return data.perfomances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}

let invoices = JSON.parse(fs.readFileSync('data/invoices.json'));
let plays = JSON.parse(fs.readFileSync('data/plays.json'));

let result = createStatementData(invoices['0'], plays);
console.log(result);
