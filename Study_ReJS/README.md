## JavaSceipt再学習

これはJavaScriptを再学習するにあたって、慣らす為に簡単なコードを書いていきます。

### 入力値を受け取った値で検証する。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<p>JS再学習</p>
<p>値を入力して下さい</p>
<input type="text" id="num">
<input type="button" value="計算" onclick="checkNum();">

<script src="main.js"></script>
</body>
</html>
```

- checkNum.js

```js
function checkNum() {
    var score = document.getElementById('num').value;
    if (score > 60){
        console.log("OK!");
    }else if(score == 40){
        console.log("so so!");    
    }else{
        console.log("No!");  
    }
}
```

###  三項演算


```js
function calc(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    max = (num1>num2) ? num1 : num2;
    alert(max)
}
```

###  関数

```
function sayHi(name) {
    //関数内で定義した変数はローカル変数とも呼ぶ
    var msg = "hello! " + name
    return msg
}
var print_name = sayHi("Endo")
console.log(print_name)
```

#### 無名関数

```js
// 無名関数

var sayHi = function(name) {
    //関数内で定義した変数はローカル変数とも呼ぶ
    var msg = "hello! " + name
    return msg
}
console.log(sayHi("endo"))

```

#### 即時関数

```js
// 即時関数

(function(name){
    console.log("hello! "+name)
})("Endo");

```

### 配列

```js
var coffes = ["FrenchRoast", "Colombian", "Kona"];
coffes.forEach(function (item,index, array) {
    console.log(item.index);
});
```

>参考:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array

### オブジェクト

```js
var my_name = "Endo"

function ServiceName(name) {
    if (name == "suzuri"){
        return name;
    }else {
        return "Sorry,we do't shell" + name + ".";
    }
}

// service Obj
var service = {
    ec_service : ["suzuri","colorme","tetote"],
    sh_servie : ["goope"],
    name : my_name,
    service_name : ServiceName("suzuri")
};

console.log(service.ec_service)
console.log(service.ec_service[0])
console.log(service.sh_servie)
console.log(service.name)
console.log(service.service_name)
```

プロパティには以下の方法でアクエスできる。

```js
//プロパティ名にアクセスする
console.log(user["name"]);
console.log(user.email); //こっち推奨
```

### 制御文

ブロッグ構文のスコープ

```js
var x = 1
{
var x = 2
}

console.log(x) #2
```

>ブロック内の var x 文はブロックの前の var x 文と同じスコープ内にあるため、この例では 2 が出力されます。C や Java では、同様のコードで 1 が出力されます。ECMAScript 2015 からは、let 文による変数宣言がブロックスコープとなります。


letをつけてブロックスコープ(ローカル変数)をつけてみる。

```js
var x = 1
{
    let x = 2   
}
console.log(x) #1

```

### falseと評価されるもの

```
false
undefined
null
0
NaN
空の文字列 ("")
```

これら以外は全てTrueと判断される。


### switch

```js
var flutes_name = "Banana";

switch (flutes_name) {
    case "Orange":
        console.log("これはオレンジの匂いがするぜ!")
        break;
    case "Banana":
        console.log("これはバナナの匂いですね！")
        break;
    default:
        // console.log("何も匂いがしないよ！");
        break;
}
```

### 例外処理

- `throw`文
  - `throw expression;`
- `try...catch`文

 
#### throw

```js
var a=3;
// 例外が起きる(エラーをおこさせる。)
throw a; #exception.js:3 Uncaught 3
console.log(a);
```

`Throw`で簡単なエラーを投げる(発生する)事ができる。
エラーは何を投げても発生する。普段は`Errorオブジェクト`を投げて確認する。

```js
var erro = new Error();
erro.message = "エラーが発生しました！";
throw erro
```

一々プロパティにしなくても、コンストラクタの引数として渡す事もできる。

```js
var erro = new Error("errorが発生しました！");
throw erro
```

エラーオブジェクト的なものを作る事もできる。

```js
// userException
function UserException(message) {
    this.message = message;
    this.naem + "userException";  
}


// 文字列として使用されるとき（例 : エラーコンソール上）に
// 例外を整形する
UserException.prototype.toString = function (){
    return this.name + ': "' + this.message + '"';
  }
  
  // UserException のインスタンスを作成し、それをスローする
throw new UserException("Value too high");
```


#### try...catch

エラーの発生を検知して処理するという方法`try...catch`

構文

```js
// 成功
try {
    // 意図として例外を発生させる。 
    throw new Error("例外処理が発生しました！")
    console.log("hello wold!")
// 失敗
} catch (e) {
    console.log("Not Hello wold!")
    // 例外が発生したらeにメッセージが入る。
    console.log(e)
}
```



