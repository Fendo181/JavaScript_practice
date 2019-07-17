// 高階関数を定義する
function arrayWalk (data, f) {
  for (let key in data) {
    // ここでshowElementを呼び出している
    f(data[key], key)
  }
}

// 結果値を格納するためのグローバル関数
var result = 0
function sumElement (value, key) {
  // 与えられた配列要素で変数resultを加算する
  result += value
}

var arrayNum = [1, 10, 5, 12, 3]
// 値と関数名を引数で与える
arrayWalk(arrayNum, sumElement)
console.log(`合計値は${result}`)
