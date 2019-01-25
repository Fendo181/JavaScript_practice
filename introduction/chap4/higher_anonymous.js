// 高階関数を定義する
function arrayWalk(data, f){
    for(let key in data){
        // ここでshowElementを呼び出している
        f(data[key], key);
    }
}

var result = 0
var arrayNum = [1,10,5,12,3];
// 値と関数名を引数で与える
arrayWalk(
    arrayNum,
    function (value,key){
    // 与えられた配列要素で変数resultを加算する
    result += value;
});
console.log(`合計値は${result}`);
