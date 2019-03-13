// ES2015以前のクラス宣言
var Member = function (firstName, lastName) {
  // コンストラクター的な宣言の仕方
  this.firstName = firstName
  this.lastName = lastName
  // 一応関数でプロパティ呼び出しだが、
  // 値が関数オブジェクトであるプロパティがメソッドとみなされる
  this.getName = function () {
    return this.lastName + '' + this.firstName
  }
}

// インスタンス化
var mem = new Member('菊池', '翔太')
console.log(mem)
console.log(mem.getName()) // 翔太菊池
