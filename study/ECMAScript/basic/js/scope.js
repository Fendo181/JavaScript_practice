'use strict';

function f () {
  // 定数や変数がブロック内で宣言された場合
  // その定数や変数はこのブロックの中でだけ有効というルールがある
  const x = 1;
  console.log(x);
}

f();
console.log(x); // x is not defined
