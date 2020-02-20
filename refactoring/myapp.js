'use strict';
// jsonファイルを読み込む為の標準ライブラリ
const fs = require('fs');

class PerformanceCalculator {
  constructor (aPerfomance, aPlay) {
    this.perfomance = aPerfomance;
    this.play = aPlay;
  }

  // 演劇の種類による請求金額の計算(呼ばれないが残しておく)
  get amount () {
    throw new Error('サブクラスの責務');
  }

  // ボリューム特典のポイント計算
  get volumeCredits () {
    // ボリューム特典のポイント換算
    return Math.max(this.perfomance.audience - 30.0);
  }
}

// ファクトリ関数によるコンストラクタの置き換え
function createPerformanceCalculator (aPerfomance, aPlay) {
  switch (aPlay.type) {
    case 'tragedy': return new TragedyCalculator(aPerfomance, aPlay);
    case 'comedy' : return new ComedyCalculator(aPerfomance, aPlay);
    default:
      throw new Error(`未知の演劇の種類: $(aplay.type)`);
  }
}

// 悲劇の場合の計算
class TragedyCalculator extends PerformanceCalculator {
  // 親クラスのamoutメソッドをオーバーライドする
  get amount () {
    let result = 40000;
    if (this.perfomance.audience > 30) {
      result += 1000 * (this.perfomance.audience - 30);
    }
    return result;
  }
}

// 喜劇の場合の計算
class ComedyCalculator extends PerformanceCalculator {
  // 親クラスのamoutメソッドをオーバーライドする
  get amount () {
    let result = 30000;
    if (this.perfomance.audience > 20) {
      result += 10000 + 500 * (this.perfomance.audience - 20);
    }
    result += 300 * this.perfomance.audience;
    return result;
  }

  // comedy は 10人につき、さらにポイント加算
  get volumeCredits () {
    return super.volumeCredits + Math.floor(this.perfomance.audience / 5);
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
    const calculator = createPerformanceCalculator(aPerfomance, playFor(aPerfomance));
    const result = Object.assign({}, aPerfomance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor (aPerfomance) {
    return plays[aPerfomance.playID];
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
