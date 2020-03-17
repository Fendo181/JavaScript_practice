// 合計値を返す関数を作成する
function sum (a, b, c) {
  // この時点で値が戻されてそれ以降の処理は実行されない
  return a + b + c;
}
const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);
