// function hello(name) {
//     //関数内で定義した変数はローカル変数呼ぶ
//     var msg= "hello! "+name;
//     return msg
// }
// var greet = hello("Endo");
// console.log(greet);
//console.log(msg); Errorがおきる。

// //無名関数(関数自体がデータ型となる
// var hello=function(name) {
//     //関数内で定義した変数はローカル変数呼ぶ
//     var msg= "hello! "+name;
//     return msg
// }; //最後にセミコロンを付ける！
//
// var greet = hello("Endo");
// console.log(greet);


//即時関数（メタモン）

// (function(name) {
//     console.log("hello"+name);
// })("Endo");

(function () {
    //xとyをローカル変数にする。
    var x=10,
    y=20;
    console.log(x+y);
})();
