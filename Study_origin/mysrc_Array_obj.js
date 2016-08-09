var a = new Array(100,200,300);

/*
リテラルで表現してもいい
var  a = [100,200,300];
*/

console.log(a.length); //配列の要素の個数を返す = 3
//push 末尾に追加する
a.push(400); // 100,200,300,400
console.log(a);
// 途中に要素を追加したい場合はsplice
a.splice(1,2); //添字の1,2に相当する値が消える。
console.log(a);//300,400
a.splice(1,2,500,600)
console.log(a);
