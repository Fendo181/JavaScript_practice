'use strict';

function showAd (message = 'AD') {
  console.log('-------');
  // テンプレートリテラルを追加
  console.log(`---${message}--`);
  console.log('-------');
}

console.log('Tom is Great');
showAd('Header AD');
console.log('Takahasi is Great');
showAd('Footer AD');
showAd();
