// 無名関数

var sayHi = function(name) {
    //関数内で定義した変数はローカル変数とも呼ぶ
    var msg = "hello! " + name
    return msg
}
console.log(sayHi("endo"))
