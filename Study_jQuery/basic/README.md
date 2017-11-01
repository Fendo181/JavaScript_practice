## jQueryの文法を学んで見る。

### 基本構文

htmlを読み込んでから処理を実行する。

```js
 <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="hogehoge"
    crossorigin="anonymous"></script>
// codeing
<script>
$(function(){

});
</script>
```

### セレクタを選択する。

セレクタ

- idセレクタ
  - `id="hoge"`:`$('#hoge')`
- classセレクタ 
  - `class = "fuga"`: `$('.fuga')`
- 要素セレクタ
  - `<p></p>`:`$('p')`
- 子孫セレクタ
  - `<div><p></p></div>`:`$('div p')`

### 用意されているアクション

- マウスクリック

```js

$(function () {
    $('#push').click(function () { 
        $(this).text("なんか押されんですけど！！");
    });
});
```

- マウスオーバ
 
```js
$(function () {
    $('#hoge').mouseover(function () { 
        $(this).text("");
    });
});
```

- マウスアウト


```js
$(function () {
    $("#hoge").mouseout(function () { 
        $(this).text("マウスアウトしたね");
    });
});
```

### 簡単なスクリプトを書いてみる。

### 無限スクロール

```js

```


#### Bitcoinの値をリアルタイムで取得してくる。

### 参考

- [jQueryってなに？超初心者向け入門講座](https://webkikaku.co.jp/blog/webdesign/jquery_start/)
- [jQuery基礎文法最速マスター](http://blog.webcreativepark.net/2010/02/02-111519.html)