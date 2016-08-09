//タイマー処理


var i =0;
function show() {
    console.log(i++);
    //無名関数呼び出しで
    var tid=setTimeout(function () {
        show();
    }, 1000);
    if (i>5){
        clearTimeout(tid);
    }
}

//ここで呼び出されるshowはfunctionのshow
show();
//
// setInterval(function () {
//     show();
//     //1000は1秒
// }, 1000);//第二引数はミリ秒で指定してあげる
//
// //一秒後に一回だけ　
// setTimeout(function () {
//     show();
// }, 1000);
