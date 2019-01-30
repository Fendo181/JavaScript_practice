// ES2015以前のクラス宣言
var Member = function(firstName, lastName){
    //　コンストラクター的な宣言の仕方
    this.firstName = firstName;
    this.lastName = lastName;
};

//インスタンス化
var mem = new Member('菊池','翔太');
// 後からメソッドを追加する事ができる
mem.getName = function(){
    // こんなかではクラス
    return this.lastName+''+this.firstName
}

console.log(mem.getName()); //翔太菊池

var mem2 = new Member('高橋','清太郎');

console.log(mem2.getName()); // mem2.getName is not a function

