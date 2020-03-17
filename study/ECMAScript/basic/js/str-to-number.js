'use strict';

// 文字列があるが、数値型として扱われる
console.log('5' * 3); // 15
console.log('5' - 3); // 2
console.log('15' / 3); // 5

// +は文字列連携で扱われる
console.log('5' + 3); // 53

console.log(parseInt('5') + 3); // 8

console.log(parseInt('a') + 3); // NaN
