## JavaScriptで正規表現を学ぶ

- webではErroチェックを行う
- 文章チェック

## 基本構文

```js

var s = "@endo, @taguch, @tamago";
var rs = s.match(/endo/)

if (rs){
    console.log('exit!');
    
}
```



## 参考
>- [正規表現](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
>- [手を動かしながら覚える正規表現＜基礎入門編＞](http://doc.mas3.net/regexp/)
>- [ドットインストール 正規表現入門](https://dotinstall.com/lessons/basic_regexp/5201)