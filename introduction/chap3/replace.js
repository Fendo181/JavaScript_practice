var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://wwww.wings.msn.to/です！';
// console.log(str.match(p))

console.log(str.replace(p,'$1'));
