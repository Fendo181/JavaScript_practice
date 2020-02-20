export default function createStatementData (invoice, plays) {
  const statementDate = {};
  // 顧客情報
  statementDate.customer = invoice.customer;
  // 公演情報
  statementDate.perfomances = invoice.perfomances.map(enrichPerfomance);
  // 合計した請求金額
  statementDate.totalAmount = totalAmount(statementDate);
  // 合計したボリューム特典のポイント額
  statementDate.totalVolumeCredits = totalVolumeCredits(statementDate);
  return statementDate;

  // シャローコピーを使って中間オブジェクトからデータを取得できるようにする
  // オブジェクトからプロパティ指定で取得できるようにする
  function enrichPerfomance (aPerfomance) {
    const result = Object.assign({}, aPerfomance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor (aPerfomance) {
    return plays[aPerfomance.playID];
  }

  // 演劇のタイプによって請求金額を分けている
  function amountFor (aPerfomance) {
    let result = 0;
    switch (aPerfomance.play.type) {
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
        throw new Error(`unknown type: ${aPerfomance.play.type}`);
    }
    return result;
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
