// console.log('hello js!'); //hello js!

// non blockingな書き方
// callバック関数

// 先にwoldが先に出力される
setTimeout(function() {
    console.log('Hello');
}, 1000);
console.log('wold')
