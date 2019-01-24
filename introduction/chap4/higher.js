// 高階関数を定義する
function arrayWalk(data, f){
    for(let key in data){
        // ここでshowElementを呼び出している
        f(data[key], key);
    }
}

// 配列を処理する為のユーザ関数
// これはarrayWalkで呼び出される関数なのでコールバック関数(あとで呼ばれる)とも呼ばれる
function showElement(value,key){
    console.log(key+':'+value);
}

var arrayNum = [1,2,3,4,5];
// 値と関数名を引数で与える
arrayWalk(arrayNum,showElement)

