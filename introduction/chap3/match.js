var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i
var str = 'サポートサイトはhttp://wwww.wings.msn.to/です！'
str += 'サンプル紹介サイトはhttp://www.web-deli-.com'
var result = str.match(p)
console.log(result)
// console.log(result[1]);

for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i])
}

// 正規表現にかかっているか判断するメソッド test
console.log(p.test(str)) // true
