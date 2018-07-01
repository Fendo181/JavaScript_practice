// var x =0;
// while( x < 10) {
//     x++;
//     console.log(x)
// }

// 再起で実装する。

function loop(x){
    if(x >= 100)
      return;
    console.log(x)
    loop(x+1) 
}

loop(0) 
