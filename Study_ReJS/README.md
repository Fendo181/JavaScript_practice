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