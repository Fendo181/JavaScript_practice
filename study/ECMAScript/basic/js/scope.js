'use strict';

const x = 2; // グローバルスコープ

function f () {
//   const x = 1; // ローカルスコープ
  console.log(x);
}

f();
console.log(x); // x is not defined
