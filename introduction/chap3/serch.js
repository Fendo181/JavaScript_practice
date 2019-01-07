var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
var str = 'サポートサイトはhttp://wwww.wings.msn.to/です！';
var str2 = 'サンプル紹介サイトは技術校舎でよろしくお願いします〜！';
console.log(str.search(p)); //8
console.log(str2.search(p)); //-1

