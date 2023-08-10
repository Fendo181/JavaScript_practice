var Member = function (firstName, lastName) {
  // グローバル変数(this)が生成されてしまう
  if (!(this instanceof Member)) {
    return new Member(firstName, lastName)
  }
  this.firstName = firstName
  this.lastName = lastName
}

// コンストラクタ呼び出しだけどオブジェクトが生成されない
var m = Member('菊池', '翔太')
console.log(m)
// console.log(firstName) //firstName is not defined
console.log(m.firstName)
