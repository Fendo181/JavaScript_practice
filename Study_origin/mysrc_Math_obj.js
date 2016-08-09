//
// console.log(Math.PI);//円周率
// console.log(Math.ceil(5.3)); //切り上
// console.log(Math.floor(5.3222));//切り捨て　
// console.log(Math.round(5,3));//ランダム値(0~5)まで


var d = new Date();//現在時刻の日付オブジェクト型

//特定の年月を指定してオブジェクトを作る
//jsでは0→1月,1→2月となる。
//var d = new Date(2014,1,11,10,20,30); //2 月 11 日 10 時 20 分 30 秒

console.log(d.getFullYear()); //その年
console.log(d.getMonth()); //その月
console.log(d.getTime()); //getTime で取得できるのは、基準日である 1970 年 1 月 1 日からの経過ミリ秒になります。
