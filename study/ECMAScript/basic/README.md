## 詳解JavaScript 基礎文法編

JavaScriptの最新の文法について勉強をします。


### はじめてのJavaScript

console.logでデバッグメッセージが出力が出来る。

```js
console.log('Hello World');
```

`html`内で呼び出す場合は<body>タグの閉じカッコ直前で宣言する。

```js
<body>
*
*
<script>
console.log('Hello World');
</script>
</body>

```

別ファイルから呼び出す場合は以下のようになる

```js
<body>
<script src="hello.js"></script>
</body>
```

### コメントアウト

一行

```js
// コメント
```


複数行

```js
/*
コメント
になります。
*/
```

### 文字列を扱う

シングルクォーテーション(`'`)を文字列として扱う`\`でエスケープしてあげるか、ダブルクオーテーション(`"`)で囲む

```js
console.log("It's me!");
// \' で特殊文字を表示する
console.log('It\'s me!');
```
文字列を連結させる時は`+`を使う

```js
console.log('Hello' + 'World!');
```

### 定数


### 参考資料

- [詳解JavaScript 基礎文法編 (全26回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_javascript_grammer_v2)
- [JavaScript Primer #jsprimer](https://jsprimer.net/)
