(function () {
'user strict';
/// Twiiter=id 検索
var s = "Endo@gmail.com";

// endodだけを抜き出す。
// 任意の一文字の最小マッチ
var re = s.match(/(.+?)@gmail(.com)/);

// 直前の正規表現パターンでマッチしたものうち1つ目のカッコのものを出してくれる。
console.log(re[0]); //Endo@gmail.com
console.log(re[1]); //Endo
console.log(re[2]); //com

if (re){
    console.log('exit!');
    console.log(re);
}else{
    console.log('unmatch!');
}
})();