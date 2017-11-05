## JavaScriptで正規表現を学ぶ

- `re`: regular expression
- webではErroチェックを行う
- 文章チェック

## 基本構文

```js
var s = "@endo, @takahasi, @mitani";
var rs = s.match(/endo/)

if (rs){
    console.log('exit!');
    
}
```

### 正規表現オブジェクトで使えるメソッド

よく使うメソッド

- `match`:文字列中で一致するものを検索する `String` のメソッド。結果情報の配列を返します。マッチしない場合は null を返します。
- `exec`:文字列中で一致するものを検索する `RegExp` のメソッド。結果情報の配列を返します。
- `test`:文字列中で一致するものがあるかをテストする RegExp のメソッド。true または false を返します。

### メタ文字を使った正規表現

#### `[]`

- `[abc]`: a か b か c 、どれかの一文字
- `[a-z]`:aからz、どれかの一文字
- `[^abc]`:a か b か cじゃない どれか一文字


 ```js
var s = "@endo, @takahasi, @mitani";
var re = s.match(/[^abcdef]ndo/)

if (re){
    console.log('exit!');
    console.log(re);
}else{
    console.log('unmatch!');
}
 ```

#### `.`,`^`,`$`

- `.`:任意の一文字
  - `/t...i/`:`t`で始まって`i`で終わる、で間が四文字
- `^`(キャレット):行頭
  - `^`(単体):行頭
  - ※`[^hogehoge]`:否定
- `$`:行末


ex:任意でどれでも来ても良い

```js
var s = "@endo, @takahasi, @mitani";
var re = s.match(/e.do/)

if (re){
    console.log('exit!');
    console.log(re);
}else{
    console.log('unmatch!');
}
```


#### `{}`

- `{}`:直前の文字の繰り返す
  - `0{2}` :00にマッチするもの
  - `0{2, }`(2文字以上) :00,000,0000000...
  - `0{2,4}`(範囲指定): 00,000,0000
  - `[a-z]{5}`:a-zの小文字が5個含まれているもの
  - `[a-z]{3,6}`:a-zの小文字が3文字以上、6文字内に含まれるもの

  
#### `?`,`*`,`+`

繰り返しに関するメタ文字

- `?`:0 or 1 
  - `a?`:aがあるか、ないかを判定する。 
- `*`:0 or more
  - `a*`:空文字か、a,aa,aaa,aaaaaa...
- `+`:1 or more
  - `a+`:a,aa,aaa,aaaaaa


#### `()`,`|`

- `()`:復数の文字列のマッチさせる。
  - `(abc)*`:abcabcabc
- `|`: or
  - (abc|def):abc,def

#### `\`(バックスラッシュ)

- `\n`:改行 
- `\t`:タブ
- `\d`:数字
  - `\d` or `\d` 
- `\w`:  英数字(小文字大文字)と_(アンスコ)
  - `\w` or `[A-Za-z0-9_]` 
- `\s`: スペース or タブ

メタ文字時自身([],{},/)

- `\/`:文字としてのスラッシュ:
- `\[,\]`

### フラグについて

正規表現のオプション

- `i`:大文字小文字を区別しない
- `g`:全てのマッチした要素を配列で返す
- `m`:複数行に対応させる。
  - `^`,`$`の行頭と行末の動作が変ってくる。

ex:オプション付きの正規表現

```js
var s = "@endo, @takahasi, @mitani";
var re = s.match(/E/img)
```

### 最小マッチ


- `+?`:最初にあったものをでマッチさせる。
- `*?`:空文字も含めてマッチさせてくる。

```js
var s = "Endo@gmail.com, takahasi@gmail,com, mitani@gmail.com";
// 全部マッチさせてくる。
var re = s.match(/.+@gmail.com/)
// 最小でマッチさせる。
var re = s.match(/.+?@gmail.com/)
if (re){
    console.log('exit!');
    console.log(re);
}else{
    console.log('unmatch!');
}

```

### `()`,`RegExp`

キャプチャとしての`()`:マッチしたいものを抽出させる。


- `/(.+?)`: 任意の一文字を抜き出す。

```js
var s = "Endo@gmail.com";
var re = s.match(/(.+?)@gmail(.com)/);

// 直前の正規表現パターンでマッチしたものうち1つ目のカッコのものを出してくれる。
console.log(re[0]); //Endo@gmail.com
console.log(re[1]); //Endo
console.log(re[2]); //com
```

### 練習課題

ex:TwitterIdをマッチさせる。

```js
var s = "@fendo181";
var re = s.match(/(@[a-zA-z0-9_]{1,15})/);

console.log(re[1]); //@fendo181
```

ex:タグの中身を抽出する。

```html
<body>
<h1 class="title">正規表現について学ぶ</h1>
</body>
```

```js
var s = document.getElementsByClassName('title')

var title = s[0].outerHTML //<h1 class="title">正規表現について学ぶ</h1
var rs = title.match(/<h1 class="title">([^<]+)<\/h1>/);
console.log(title);
console.log(rs[1]); //正規表現について学ぶ
```

ex:日付を日本語表記に直す



```js
(function () {
'user strict';

var s = '2017-11-05';
var rs = s.match(/(\d{4})[-\/](\d{2})[-\/](\d{2})/);
console.log(rs[1]+'年'+rs[2]+'月'+rs[3]+'日'); //2017年11月05日

})();

```


## 参考
>- [正規表現](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
>- [手を動かしながら覚える正規表現＜基礎入門編＞](http://doc.mas3.net/regexp/)
>- [ドットインストール 正規表現入門](https://dotinstall.com/lessons/basic_regexp/5201)