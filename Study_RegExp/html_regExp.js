var s = document.getElementsByClassName('title')

var title = s[0].outerHTML //<h1 class="title">正規表現について学ぶ</h1
var rs = title.match(/<h1 class="title">([^<]+)<\/h1>/);
console.log(title);
console.log(rs[1]); //正規表現について学ぶ
