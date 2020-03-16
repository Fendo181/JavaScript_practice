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


>定数と変数の使いわけですが、最近のプログラミングでは、ある名前に割り当てた値がころころ変わるとわかりづらいので、なるべく const を使いつつ、どうしても必要なときに let を使うという方法がよく取られます。

昔は`var`があったが、今は使わない。
変数は英数字、`$`、`_`のみ。数値から始まらない。
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

`typeof`メソッドを使うと、どのオブジェクトか判定できる。

```js
typeof  'hi' #String
```

### 数字から文字列を扱うに注意

JavaScriptは数字からなる文字列も数値に変換して、演算できます。

```js
// 文字列があるが、数値型として扱われる
console.log('5' * 3); // 15
console.log('5' - 3); // 2
console.log('15' / 3); // 5

// +は文字列連携で扱われる
console.log('5' + 3); // 53

```

ただし、`+`は例外で、文字列連携として扱われる。
数値計算をする場合は文字列を整数値に戻せばよい。

```js
console.log(parseInt('5') + 3); // 8
```

`parseInt`で変換できない文字列を渡した場合は`Not a Number`が返ってくる。
数値にしようとしたけどできなかった場合にこうした値が出てくる。

```js
console.log(parseInt('a') + 3); // NaN
```

### 比較演算子

falseとして評価されるもの

- `0`
- `null`
- `underfind`
- `''`;
- `false`

それ以外はすべて`true`と評価される

```js
console.log(Boolean(0)); // false
console.log(Boolean('Hello')); // true
```

### 条件分岐

```js
const score = 70;

if (score >= 80) {
  console.log('great!');
} else if (score >= 60) {
  console.log('Good!!');
} else {
  console.log('OK...');
}
```

上記の内容を条件演算子で短く書き直す事もできます。


```js
score >= 80 ? console.log('Great!') : console.log('OK...');
```

短かく書けるという利点の一方で、場合によってはコードが読みにくくなるので、読みやすさのバランスと考えて書いたほうが良い。

### Switch文で条件分岐

`switch(value)`で、`value`値によって条件分岐ができる。

```js
const signal = 'red';

switch (signal) {
  case 'red' :
    console.log('Stop!');
    break;
  // 複数の条件を加える
  // この場合は blue もしくは redの場合はという意味になる
  case 'blue' :
  case 'green':
    console.log('Go!!');
    break;
  default:
    console.log('Wrong Signal');
    break;
}
```

### forを使ったループ処理

`` で囲んだ中で変数を展開できる。
これは**テンプレートリテラル**と呼ばれます。

[JavaScript の テンプレートリテラル を極める！ - Qiita](https://qiita.com/kura07/items/c9fa858870ad56dfec12)

ここでは`let i`を`${i}`で展開している。

```js
for (let i = 1; i <= 10; i++) {
  console.log(`Hi ${i}`);
}
```

### whileを使ったループ処理

基本構文 

```js

let hp = 100;

while (hp >= 0) {
  console.log(`${hp} HP Left!`);
  hp -= 15;
}
```

`while()`の中で判定処理が`true`になるまでループ処理を行う。またwhileの判定処理を後にして1度だけ最初に実行する場合は`do while()`が使える

```js
let hp2 = -50;

do {
  console.log(`${hp2} HP Left!`); //-50 HP Left!
  hp2 -= 15;
} while (hp2 > 0);
```

#### continue,break

`for`や`while`で特定の場合の時にスキップさせたり、処理を抜けたい時に使う構文があります。

- `continute`: ループ処理の中で特定の条件の時だけ、処理をスキップさせる


```js
for (let i = 1; i <= 10; i++) {
  // 3の倍数の時だけスキップさせる
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
```

- `break`: ループ処理の中で特定の条件の時になった際に、ループ処理を抜ける

```js
for (let i = 1; i <= 10; i++) {
  // iが4になったらbreakして処理が終了する
  if (i === 4) {
    break;
  }
  console.log(i);
}
```

### 関数

`function`を使って関数を定義する。
ここでは処理の中で広告を挟む処理を`showAd()`で関数化して、`showAd`を呼び出せば、どこからでも広告の処理を実行する事が出来る


```js
'use strict';

function showAd () {
  console.log('-------');
  console.log('---AD--');
  console.log('-------');
}

console.log('Tom is Great');
showAd(); //  関数呼び出し
```

#### 引数を使う

`function`内の値を、引数によって表示する文字列を変えてみます。

>この関数に渡す値を引数と呼ぶのですが、関数を定義するときの`message`は、値を仮置しているので仮引数、実際に関数を呼び出すときに渡される`Header AD`は実引数と呼ぶ


```js
function showAd (message) { // 仮引数
  console.log('-------');
  // テンプレートリテラルを追加
  console.log(`---${message}--`);
  console.log('-------');
}

console.log('Tom is Great');
showAd('Header AD'); // 実引数
console.log('Takahasi is Great');
showAd('Footer AD');
```

実行結果

```
Tom is Great
-------
---Header AD--
-------
Takahasi is Great
-------
---Footer AD--
-------
```

#### 関数のデフォルト値を設定する

また関数を呼び出す時に仮引数に値を入れておく事で、デフォルト値を設定する事ができる

```js
function showAd (message = 'AD') {
  console.log('-------');
  console.log(`---${message}--`);
  console.log('-------');
}

```

#### return で値を返してみる

`return`を実行するとそれ以降の処理は実行されない事に注意する

```js
// 合計値を返す関数を作成する
function sum (a, b, c) {
  // この時点で値が戻されてそれ以降の処理は実行されない
  return a + b + c;
}
const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);
```

### 参考資料

- [詳解JavaScript 基礎文法編 (全26回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_javascript_grammer_v2)
- [JavaScript Primer #jsprimer](https://jsprimer.net/)
