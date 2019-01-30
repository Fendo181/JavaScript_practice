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

