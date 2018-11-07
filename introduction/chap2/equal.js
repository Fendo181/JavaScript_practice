let x = 1;
let y = x; //代入

x = 2;
console.log(y);

let data1 = [0,1,2]; //配列
let data2 = data1;  //配列リテラルの場合は、参照渡し(アドレス)を渡すことになる
data1[0] = 5;

console.log(data2);
