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

`const`で定数を宣言する

```js
const price
```

定数を扱うと後から変更がしずらくなる。

### 変数

`let`で変数を宣言する。

letで宣言した変数は後から値が変更できる。


>定数と変数の使いわけですが、最近のプログラミングでは、ある名前に割り当てた値がころころ変わるとわかりづらいので、なるべく sconst を使いつつ、どうしても必要なときに let を使うという方法がよく取られます。

昔は`var`があったが、今は使わない。
変数は英数字、`$`、`_`のみ。数値から始まられない。
予約後は使えない。

変数を使った計算方法については以下の通りです。

```js
let price = 500;

// price = price + 100
price += 100;

// price = price * 2
price *= 2;

// price = price + 1
price++;
// price = price - 1
price--;
```

### データ型について

- String(文字列)
- Number(数値)
- Underfined
  - 定義されていない。
- Null
  - 値がそもそもない
- Boolean
  - true,false
- Obj(オブジェクト)
  - `{a:3,b:5}`

```js
typeof  'hi'
```

### 参考資料

- [詳解JavaScript 基礎文法編 (全26回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_javascript_grammer_v2)
- [JavaScript Primer #jsprimer](https://jsprimer.net/)
