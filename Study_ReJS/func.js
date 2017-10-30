function sayHi(name) {
    //関数内で定義した変数はローカル変数とも呼ぶ
    var msg = "hello! " + name
    return msg
}
var print_name = sayHi("Endo")
console.log(print_name)