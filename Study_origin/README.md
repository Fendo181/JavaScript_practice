JavaScriptの始め。
# JavaScriptとはなにか


## 概要

- ブラウザに実装されるスクリプト言語
- 動きのあるウェブサイトを作れる。


## 基本知識

- `script` タグ自体は body タグの閉じタグの直前に書くのが一般的なので、そこに書いていきましょう。

- Hello wold!

```html
!-- Stored in resources/views/layouts/master.blade.php -->
<html>
    <head>
        <title>JSの勉強</title>
    </head>
    <body>
        <div class="container">
            <script>
                console.log("hello wold!!");
            </script>
        </div>
    </body>
</html>

```

-  コメント
```js
復数
/
*
*/
単数
//
```

- 外部ファイルから読み込む

このように外部ファイルからも書いていくことができるので、ソースが長くなってきたら外に出してしまうのもいいかと思います。

```js
<script src="mysrc.js"></script>
````

## 変数

- 変数 :データにつけるラベル
- `var`を必ずつける！！
```js
var msg = "hello wold"`;
```
- データ型
   - 文字列
   - 数値
   - 真偽値
   - オブジェクト
      - 配列
      - 関数
      - 組み込みオブジェクト
   -   undefind
   -   null 何もない
   -   数値
      - 10
      - 2.5
      - -2.5
   - 演算子
       -  /  + * %
       -  代入を伴う演算子(+=)
       -  インクリメント(++)


**地味に多いなぁ！**

## 文字列を使ってみよう。

- 文字列
    - 表現文字
    - 特殊 文字
- 演算子

```js
特に違いない
""で囲んで上げる
``で囲んであげるしかねぇ
```
練習コード
```js
var s;
s = "Hello";
s = 'Hello'
// 改行コード
\n
// タブ
\t
```

- 文字列の連結

s="hello" + "world";

_数値同士の演算の場合には数値になりますし、文字列同士の場合には連結になるのですが、片方が文字列の場合は「+」が出てくると文字列の連結になってしまうので、それを気をつけておいてください。_

```js
var t;
//この場合、3は文字列として扱われる
t="edno"+3;
s="5"+5;
```

結果sは"edno3"
結果tは"55"

## 条件分岐

```js

if (条件){
    真
}else{
    偽
}
```

練習コード

```js
var score = 20;

if (score >  60){
    console.log("ok");
}else if(score == 40){
    console.log("so so");
}else{
    console.log("No");
}
```

-  比較演算子

```
> <
=== ==

!==  !=

````

*「===」「!===」は「==」「!=」とも書けますが、「===」「!==」の方が厳密に比較をしてくれるので、「===」「!==」を使う癖をつけた方がよろしいかと思います。*


- 論理演算子

```js
AND &&
OR ||
NOT !
```

## 真偽値と二項演算子

- 真偽値
    - 文字列:空文字だったらtrue
    -  数値:0かNaN( 特殊型)以外だったらtrue
    -  true/false
    -  オブジェクトに関してはnull以外だったらtrue
    -  underfined,null -> false

以下は同じ処理になる。

```js
var  x="ok";

if(x){
console.log(x);
}

if (x !==''){
console.log(x);
}
```

- 参考演算子

```js
//参考演算子

var a,b,c;

if(条件){
    a=b
}else{
    a=c
}
// これで表せる。
a =(条件) ? b:c;

```


代表的な例(最大を求める三項演算子)

```js
var max,x,y;

x=60;
y=65;

//xがyよりも大きかったらMaxはxで、そうじゃなかったらyですよ
max = (x>y) ? x : y;

console.log("Maxは"+max+"です");
```
## swich文を使ってみよう

基本構文
```js
var signal = "pink";

switch (signal) {
    case "red":
        console.log("stop!");
        break;//処理が終わった合図:必ずつける。
    // greenとpinkの時にこの処理を行いなさい。
    case "green":
    case "pink":
        console.log("slow!");
        break;
    case "blue":
        console.log("Go!");
        break;
    default://それ以外の文
        console.log("Yeaaaa!");
        break;
}
```


## while文,do while文を使おう!


- while文(先判定)
- do while 文(後判定)


**while 文と do ... while 文の違いなのですが、条件判定が先に行われるか後に行われるかの違いになります。**

練習コード

```js
console.log("Heloo ! wold! While do js !");

// while (先判定)
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while(後判定)

var j =200;
do {
    console.log(j);
    j++;
}while (j<10);

```

実行結果


```js
Heloo ! wold! While do js !
mysrc_while.js:6 0
mysrc_while.js:6 1
mysrc_while.js:6 2
mysrc_while.js:6 3
mysrc_while.js:6 4
mysrc_while.js:6 5
mysrc_while.js:6 6
mysrc_while.js:6 7
mysrc_while.js:6 8
mysrc_while.js:6 9
mysrc_while.js:14 200
(index):14 hello wold!!

```

## for文


- break :ループを抜ける
- continue:ループ処理を一個スキップする。　


練習コード

```js
console.log("Heloo ! wold! While do js !");


// for 文 基本

/*
break :ループを抜ける
continue:ループ処理を一個スキップする。　

*/

for (var i=0; i<10; i++){
    if(i === 5){
        //break; //5で抜ける
        continue; //5の時だけ処理を外す
    }
    console.log(i);
}

```


##  alert､confirm､promptを使おう

- alert

```js

alert("hello wold!");
```

実行結果**okボタン**が付いたダイアログボックスで表示される。

- confirm

```js
var answer=confirm("Are you sutre");
console.log(answer);
```

OK ボタンだけではなくて **OK とキャンセルボタン**がついたダイアログボックスを出してくれるものになります。（confirm には）返り値があって、**OK ボタンを押したら true が返ってきて、キャンセルボタンを押したら false**が返ってきます。

よく使われる例　

```js
if(confirm("Are you sutre?")){
    console.log("消去されました!");
}else {
    console.log("キャンセルされました!");
}

````
- prompt

prompt は何かというと、**ユーザから情報を受け取るため**に使います。

```js
var name=prompt("お名前は?")
//入力された値がそのまま入る　

//なしだとnull
```

第 2 引数を取ることができて、「prompt("お名前は？", "名無しさん")」のようにして最初からダイアログボックスに入れておく初期値を設定することも可能です。

```js
var name=prompt("お名前は?","名無しの遠藤さん")
console.log(name);
```

##  関数

- 関数:復数の処理

お引数は「,」区切りでいくつでも使うことできる

```js
function 関数名 (引数,引数,....,引数){
処理
return 返り値
}
```

-  ローカル変数
関数内で宣言すた変数は**ローカル変数**と呼ばれ、関数以外からはアクセスできない。

```js
function hello(name) {
    //関数内で定義した変数はローカル変数呼ぶ
    var msg= "hello! "+name;
    return msg
}
var greet = hello("Endo");
console.log(greet);
```

- 無名関数

>関数も実はデータ型であるので、変数に入れることも可能です。


上のコードを無名関数で書き換えた物
```js
//無名関数(関数自体がデータ型となる
var hello=function(name) {
    //関数内で定義した変数はローカル変数呼ぶ
    var msg= "hello! "+name;
    return msg
}; //最後にセミコロンを付ける！

var greet = hello("Endo");
console.log(greet);
```

>「function hello(name) { … }」の書き方と「var hello = function(name) { … };」の書き方の違いにはいろいろ難しい理論とかあるのですが、とりあえず関数はこのようにも書けると覚えておくとよろしいかと思います。

- 即時関数

関数呼び出しをせずにhello関数を呼び出すことができる。
**即時関数は呼び出してすぐに実行されるので、関数名も省略が可能です。**

```js
(function  hello(name) {
    console.log("hello"+name);
})("Endo");
```
実行結果

```js
helloEndo
```

- 関数名がないver(**メタモン**)

```js
(function(name) {
    console.log("hello"+name);
})("Endo");


```

- 即時関数をローカル変数の囲いとして使う方法

```js
(function () {
    //xとyをローカル変数にする。
    var x=10,
    y=20;
    console.log(x+y);
})();
```

*関数内で定義された変数は外からアクセスができないので、即時関数で囲うことによって変数を安全に使うことができるようになります。*

## タイマー処理

- setInterval:ある一定時間ごとにある処理を繰り返す

```js
setInterval(function () {
    show();
    //1000は1秒
}, 1000);//第二引数はミリ秒で指定してあげる
```

*setInterval の方は前の処理が終わったかどうかというのを考えずに次の処理を始めてしまうので、あまりにも処理が重い場合には、次々に新しい処理が実行されて、ブラウザがクラッシュしてしまうという問題があります。*


- setTimeout :ある一定時間後にある処理を 1 回だけ実行するものになっています。

```js
//一秒後に一回だけ　
setTimeout(function () {
    show();
}, 1000);
```

*setTimeout の方はちゃんと前の処理が終わったかどうかを考慮するので、実は繰り返し処理には setTimeout の方がよく使われたりします。*

- setTimeout で setInterval のように繰り返し処理を十限するには?

 5秒でtimeout するような処理

 ```js
 var i =0;
function show() {
    console.log(i++);
    //無名関数呼び出しで
    var tid=setTimeout(function () {
        show();
    }, 1000);
    if (i>5){
        clearTimeout(tid);
    }
}
//ここで呼び出されるshowはfunctionのshow
show();
 ```


## 配列
グループ化されたデータ

```js
var score = [100,200,300]
console.log(score[0]);//100
```

例

```js

var score = [100,200,300];
console.log(score[1]);
score[1] = 500;
console.log(score[1]);

//全てを表示する　
console.log(score);
```

- 配列の中に配列(マトリックス)を入れる。

```js

var mtrix = [
[1.2,3],
[4,5,6]
];

//[行][列]
console.log(mtrix[1][1]); //5

```

## オブジェクトの概要説明
- オブジェクト:メソッドとプロパティが一緒にグループ化された物

```js
//userはオブジェクト名
var user ={
}
```

練習コード

```js
var user ={
    email:"endo@email.com", //プロパティ名
    score:80
};

//プロパティ名にアクセスする
console.log(user["email"]);
console.log(user.email); //こっち推奨
console.log(user.score);
user.score = 100
console.log(user.score);
 ```

 実行結果
 ```js
 endo@email.com
mysrc_obj1.js:8 endo@email.com
mysrc_obj1.js:10 80
mysrc_obj1.js:12 100
(index):20 hello wold!!

 ```

 - メソッド呼びだし

```js
var user = {
    email:"endo@email.com",
    score:120,
    greet:function(name){//オブジェクト内の関数をメソッドと呼ぶ

        console.log("hello".name);
    }
};
//メソッド呼びだし
user.greed("endo");

```

- this
thisというキーワードは、今自分がいる**オブジェクトを参照**することができます。this をuser(オブジェクト)と考えるとわかりやすい。

```
//やっている事は一緒
this.email　//内での呼びだし。
user.email //外での呼びだし。
```



```js
var obj={
var name ="endo",  //オブジェクト内のプロパティをメソッドで扱いたい
greed:function(name){
        console.log(this.name); //endoが出力される
        console.log(name) //email is not defineでエラー扱い
    }
};

```

## Stringオブジェクト

組み込みオブジェクトを使う。

- Stringオブジェクト
- Arrayオブジェクト
- Mathオブジェクト
- Dateオブジェクト

*基本MDNで調べると仕様が出て来る。*

- 文字列インスタンス

```js
//Stirngインスタンスを作る
var s =new String("Endo");

console.log(s.length); //文字数を返してくれる。
console.log(s.replace("E","t")); //tend
console.log(s.substr(1,2)); //添字の[1]から[2]まで持ってくる.//nd


```

- 文字列リテラル

```js
var s= "Endo" //文字列リテラル =>文字オブジェクト
console.log(s.length); //文字数を返してくれる。
console.log(s.replace("E","t")); //tend
console.log(s.substr(1,2)); //添字の[1]から[2]まで持ってくる.//nd
```

実行結果は同じ


- 違いは？

*文字列リテラルにメソッドやプロパティを付けると、JavaScript の方で「文字列オブジェクトを使いたいんだな」と解釈して、一瞬文字列オブジェクトに変換してくれるので、実行結果が同じになっていることに注意してください。*


## Arraオブジェクト

よく使う追加するメソッド

 - unshift:先頭に追加する
 - pop:末尾に追加
 - shift:先頭から除去
 - push:末尾から除去

```js
unshift -> array <- push
shift   <- array -> pop
```

- splice
要素を範囲を指定して出力したり、けずって値を追加する事が可能である。

*要素を途中から追加したい場合には、「a.splice(1, 2, 800, 1000);」とやると、添字 1 の位置から 2 個削除して、その同じ位置から 800 と 1000 を追加する、という意味になります。*


練習コード

```js
var a = new Array(100,200,300);

/*
リテラルで表現してもいい
var  a = [100,200,300];
*/

console.log(a.length); //配列の要素の個数を返す = 3
//push 末尾に追加する
a.push(400); // 100,200,300,400
console.log(a);
// 途中に要素を追加したい場合はsplice
a.splice(1,2); //添字の1,2に相当する値が消える。
console.log(a);//300,400
a.splice(1,2,500,600)
console.log(a);
```

## MathオブジェクトとDateオブジェクト
Mathオブジェクトはインスタンスを作らなくてもいい。

```js
console.log(Math.PI);//円周率
console.log(Math.ceil(5.3)); //切り上
console.log(Math.floor(5.3222));//切り捨て　
console.log(Math.round(5,3));//ランダム値(0~5)まで
```

Dateオブジェクト

現在時刻の日付オブジェクトを取得
```
var d = new Date();
```
特定の年月を指定してオブジェクトを作る

```
//jsでは0→1月,1→2月となる。
var d = new Date(2014,1,11,10,20,30); //2 月 11 日 10 時 20 分 30 秒

```

- その他の例

```js
console.log(d.getFullYear()); //その年
console.log(d.getMonth()); //その月
console.log(d.getTime()); //getTime で取得できるのは、基準日である 1970 年 1 月 1 日からの経過ミリ秒になります。

```


## DOMとは何か？

参考文検

>[ブラウザの仕組み: 最新ウェブブラウザの内部構造](http://www.html5rocks.com/ja/tutorials/internals/howbrowserswork/)

**ブラウザ自体も window というオブジェクトで JavaScript から扱うことができます。**

 なにそれやばい。

 ```js
 window.document //今開いているページ
 省略可能
 document//これでもok
 ```

*window.document を JavaScript で操作することによって動的にページの一部を書き換えたり、新しい要素を追加したりといったことができるようになります。*

- DOMって結局なによ

**document にアクセスするための色々な命令を 「document object model」 と言います。一般的に DOM（ドム）と呼ばれていて、DOM をいじる、DOM を操作する、といった使い方をするのを覚えておきましょう。**

練習コード


```js
console.dir(window); //windowsというオブジェクト
console.log(window.outerHeight); //windowの高さ　
// /*ハイパーリンク*/
window.location.href = 'http://hogehoge';
window.document //今開いているページ
```

- DOMを操作して処理を行う

- ID 取得:`document.getElementById`
- text内容を入れ替える:`textContent`
- classに適用させる:className

```js
var e = document.getElementById('msg');
e.textContent = "Hello";
e.style.color = 'red';
e.className = `mystyle`;

```

- 子要素の最後に追加:`document.body.appendChild()`

```

// 新しく自分で要素を作る
// body 要素の中にp 要素を追加して、
// その p 要素の中にtext を仕込 む。

var greed = document.createElement('p'),
    text = document.createTextNode('Yeaaa');

document.body.appendChild(greed).appendChild(text);

```

実行結果
```
Hello( 赤文字でbold が適用されている)
Yeaaa
```

## イベントを設定する。

何かボタンをクリックする度にページ内の要素を書き換える、というものはよく見るかと思います。button という要素を作り add という id を付けておきました。このボタンをクリックする度に、var greet 以下で行ったテキストを追加する命令を実行するというのを実装してみたいと思います。

-  要素に対してイベントを紐付ける:`addEventListener`

練習コード
HTMLファイル

```html
<!-- Stored in resources/views/layouts/master.blade.php -->
<html>
    <head>
        <style>
            .mystyle{
                font-weight: bold;
                border: 1px solid gray;
            }
        </style>
        <title>DOMの勉強</title>
    </head>
    <body>
        <div class="container">
            <p id="msg">おはよう！</p>
            <button id="add">Click!</button>
            <!-- <script src="mysrc_DOM_obj.js"></script> -->
            <script src="mysrc_DOM2_obj.js"></script>
            <script>
                console.log("hello wold!!");
            </script>
        </div>
    </body>
</html>

```

JSファイル

```js

//addEventListener の第 1 引数にはイベントの種類を割り当てます。
//第 2 引数には関数を与えるのですが、今回はその場限りなので無名関数で OK かと思います。

document.getElementById('add').addEventListener('click',function() {
    var greed = document.createElement('p'),
        text = document.createTextNode('Yeaaa');
    document.body.appendChild(greed).appendChild(text);
});

```
