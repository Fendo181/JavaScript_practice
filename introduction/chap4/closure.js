// クロージャとはローカル変数を参照している関数内関数である
function closure(init){
    // ローカル変数
    var conter = init;
    // 返り値が匿名(無名)関数
    return function(){
        // ここのcounterは破棄されない
        return conter++;
    }
}

// 匿名(無名)関数がセットされる
var MyClosure = closure(1);
// 関数リテラルを経由して戻り値を参照している8
console.log(MyClosure());
console.log(MyClosure());
console.log(MyClosure());

