let data = ['app', 'orange', 'banana']
Array.prototype.hoge = function () {}

// forinが仮変数にkeyを受け取るに対して、valueには値が入るようになっている
for (let value of data) {
  console.log(value)
}
