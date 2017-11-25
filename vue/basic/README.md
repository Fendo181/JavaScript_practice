# Vue.jsの基礎文法

## Vue.jsとは何か?

- JavaScritpを使ってより複雑な事をやろうとするときに便利。
- 軽量、他のライブラリに依存しない。
- 後は触りながら理解していきます。


## 雛形ファイル

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CountUp</title>
</head>
<body>

<script src="https://npmcdn.com/vue/dist/vue.js"></script>

<!-- vue -->
<script>

var vm = new Vue({
    el: '.app',
    data:"",
})

</script>
</body>
</html>
```

### 参考サイト

- [公式](https://jp.vuejs.org/)
- [Vue.js(Github)](https://github.com/vuejs/vue)
- [Vue.js Advent Calendar 2016](http://qiita.com/advent-calendar/2016/vue)

## MVVMとは?

**Model View ViewMode= MVVM**

- 単方向の依存関係(動作が直感的に理解できる。)
- 単方向の処理フロー
- テストが書きやすい。
- 「ViewはViewModelの影。」
  - Viewは何も判断を行わず、ViewModelの状態を黙々とUIに反映させる。

>参考
- [Vue.jsではじめるMVVM入門](http://design.dena.com/engineering/vue-js%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8Bmvvm%E5%85%A5%E9%96%80/)
- [MVVMとは何か。 「ViewModelはModelの影であり、ViewはViewModelの影である」 他のMV*について](https://speakerdeck.com/takasek/mvvmtutehe-toiuka-dot-dot-dot-mv-wan-goto-he)

```
Model(data/methods) -- ViewModel(object) <--> View(interface)
```

そもそもVue.jsとはアプリケーションに関する `data` とか振る舞い（`methods`）を定義した `ViewModel(objec)` を用意してあげて、その `data` や振る舞いが `View(interface)` のどの部分と連動すのかを指定してあげることでアプリケーションを組み上げていくのが可能です。

## Vue.jsで簡単なカウンタアップ

### 用語解説

- el:エレメントを指す。バインドする要素のidやクラス名を指定する。
- v- :`v-`から始まる命令をデ**ィレクティブ**と言う。
  - [Vuejsのディレクティブ](https://jp.vuejs.org/v2/api/#ディレクティブ)

ex: Vue.jsでカウントアップ

```js

<div id="mycounter">
    <!-- 勝手にカウントをしてくれる -->
    <div v-text="count"></div>
    <button v-on:click="countUp" >Up</button>
    </div>
</div>

<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// View モデル
var vm =new Vue({
  // el=elemment ここでバインドするエレメントのidを指定する。
  el: '#mycounter',
  data:{
    count:0
  },
  methods:{
    countUp: function() {
      this.count++;
    }
  }
});
```

## Vue-jsのディレクティブ紹介

詳細は[公式ドキュメント](https://jp.vuejs.org/v2/api/#ディレクティブ)をみて下さい。


- v-text
  - 要素の`textContent`を更新します。
  - テンプレート構文の展開
- v-html
  - 要素の innerHTML を更新します。
- v-show
  - 式の値の真偽に応じて、要素の CSS プロパティ display をトグルします。
  - 表示したり、隠したりする。
  - これ結構使えそう。
- v-if
  - 真偽値の評価をおこない要素の描画を行います。
  - v-for よりも優先される。
- v-else
  - 式を受付けません。
  - 制約: 直前の兄弟要素は v-if または v-else-if を持つ必要があります。
  - v-ifに対応する`endo block`に相当する。
- v-else-if
  - v-ifに対応する`else if  block`に相当する。
- v-for
  - `for文`みたいに使う。
  - よく使うんだよ。これは。
  - [リストレンダリング](https://jp.vuejs.org/v2/guide/list.html)
- v-on
  - `event`を発火させる。
  - `v-on:click`は`@click`の様に省略できる。
  - これもよく使う。
- v-bind
  - ViewからViewModelにバインドさせる。
  - `v-vind:src="hogehohe"`は`:src="hogehoge"`のように使う。
  - よく使う。めっちゃ重要。
- v-mode
  - `<input>`.`<select>`,`<textarea>`,`コンポーネント`の要素からの値に応じて変化します。
  - `form` の `input` 要素またはコンポーネント上に双方向バインディングを作成します
  - [フォーム入力バインディング](https://jp.vuejs.org/v2/guide/forms.html)
- v-pre
  - 生の mustache`{{ }}` タグを表示するためにも使う。
- v-clock
  - 時間を指定して要素の描画を行います。
  - うまく組み合わせればアニメーションとか出来そう。
- v-once
  - 要素とコンポーネントを一度だけ描画します

## 式がそのまま使える。

先程作ったカウントアップのコードに式をいれて、改変してみる。

ex: 式をいれたカウントアップするコード

```html

<div id="mycounter">
    <!-- 勝手にカウントをしてくれる -->
    <div v-text="count"></div>
    <!-- 式がそのまま使える。-->
    <div v-text="count * 10"></div>
    <!-- 文字列をそのまま使える。 -->
    <div v-text=" '(' + count + ')' "></div>
    <!-- 三項演算子  -->
    <div v-text="count ? count : '--' "></div>

    <!-- <button v-on:click="countUp" >Up</button> -->
    <!-- そのまま式を書いてもいい  -->
    <button @click="count++" >Up</button>

    </div>
</div>

<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// View モデル
var vm =new Vue({
  // el=elemment ここでバインドするエレメントのidを指定する。
  el: '#mycounter',
  data:{
    count:0
  }
});
```

## v-text,v-html

[mustache](http://web-dev.hatenablog.com/entry/js/mustache/quick-start) というテンプレートエンジンの記法を使うことができるのですが、その場合は v-text と書かずとも、この（div 要素）中に直接「`{{content}}`」と data のキーを書いてあげれば、上と全く同じ機能が実現できます。

```js
//v-text
<div v-text="contnt"></div>
// 同じ意味
<div>{{ 'content*'+content }}</div>
```

ex: Vuejsのコード

```js
<script>
// object(ViewMode) - data/methods(Model) <--> interface(View)
var vm =new Vue({
  el: '#myapp',
  data:{
    content:"Hello Endo!"
  }
});

</script>
```
v-textでhtmlタグを含んだコードを表示させようとすると、セキュリティの問題からエスケープで表示されないので、`v-html`で表示させる。
因みにv1.0では`{{{{ }}}}`で省略できましたが、v2.0からは公式の[アナウンス](https://jp.vuejs.org/v2/guide/migration.html#HTML-の展開-削除)より、非推奨された事に注意してください。

- [Vue 1.x からの移行FAQ](https://jp.vuejs.org/v2/guide/migration.html#FAQ)

```js
<!-- <div v-html="content"></div> -->
<!-- 下のコードは動かない!! -->
<div>{{{ content}}}</div>
```

## v-show,v-if

条件に応じて、ある要素の表示・非表示を切り替えるために使える`v-show` や `v-if` というディレクティブについて見ていきます。


ex: v-showを使った例。

```js
<div id="myapp" >
  <div v-show="showContent">
  {{ content }}
  </div>
</div>
<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// v-show 要素を表示するだけ。
// v-if
var vm =new Vue({
  el: '#myapp',
  data:{
    content:'Hello Wold! v-show',
    // falseにすると表示されなくなる。
    showContent: true
  }
});
</script>
```

ex: v-ifを使った例。

```js
<div id="myapp" >
  <div v-if="showContent">
  {{ content }}
  </div>
</div>
<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// v-show 要素を表示するだけ。
// v-if
var vm =new Vue({
  el: '#myapp',
  data:{
    content:'Hello Wold! v-show',
    // falseにすると表示されなくなる。
    showContent: false
  }
});
```

v-showは`showContent`をfalseにした際に、`style="display: none;`が適用されて要素の中身がのこったまま表示が消えるが、v-ifはそもそも要素自体が消えてしまう事に注意して下さい。

### v-showとv-ifの使い分けは?

>- [v-if vs v-show](https://jp.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)


>v-if は 遅延描画 (lazy) です。 初期表示において false の場合、何もしません。条件付きブロックは、条件が最初に true になるまで描画されません。一方で、v-show はとてもシンプルです。要素は初期条件に関わらず常に描画され、シンプルな CSS ベースの切り替えとして保存されます。**そのため、とても頻繁に何かを切り替える必要があれば v-show を選び、条件が実行時に変更することがほとんどない場合は、v-if を選びます。**

- v-show:頻繁に切り替えが必要な時。
- v-if:条件が実行時に変更することがほとんど無い場合はv-ifを選ぶ。

## v-bind:class

モデルの状態に応じて何らかのクラスを付けたり付けなかったりという構造を実現する `v-bind:class` というディレクティブについて使い方を見ていきます。

- [v-bind](https://jp.vuejs.org/v2/api/#v-bind)

ex1: v-bind:class 1つのみ。

```js

<div id="myapp" >
  <!-- 付けたいclass -->
  <div v-bind:class="colorStyle">
    {{ content }}
  </div>
</div>
<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// v-show 要素を表示するだけ。
// v-if
var vm =new Vue({
  el: '#myapp',
  data:{
    content:'Hello Wold! v-class!!',
    colorStyle:'red',
    fontweightStyle:'bold',
  }
});
</script>
```

仮に、boldとredを両方適用させる時に、クラスを用意して`true`か`false`で適用する場合は

ex2: v-bind:classで復数のクラスを適応させて管理させたい場合。

```js
<div id="myapp" >
<!--  red のクラスを isRed が true の時に付けたい、bold のクラスを isBold が true の時に付けたい、という場合はこのように書いてあげれる。 -->
<div v-bind:class="{ red :isRed,bold: isBold}">
    {{ content }}
</div>
</div>
<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// v-show 要素を表示するだけ。
// v-if
var vm =new Vue({
  el: '#myapp',
  data:{
    content:'Hello Wold! v-class!!',
    colorStyle:'red',
    fontweightStyle:'bold',
    // データの真偽値でclassを適用させるかも制御できる。
    isRed:true,
    isBold:false
  }
});
```

## v-for

- [リストレンダリング](https://jp.vuejs.org/v2/guide/list.html)

>v-for ディレクティブは **item in items** の形式で特別な構文を要求し、items はソースデータの配列で、item は配列要素がその上で反復されているエイリアスです。

なんかpythonっぽいですね。
因みに要素が何番目かという事を確認したい場合は `v-for=(item,index) in items`と書いて、任意の引数として`index`を渡す事でコード上に`{{ index }}`を書くと自動的に配列の添字を表示してくれます。

ex:v-for 練習。

```js
<body>
  <h1>Vue.jsチュートリアル</h1>
  <div id="myapp">
    <ul>
      <!-- 配列を呼び出す -->
      <li v-for="(d,index) in d1">
        {{index}}- {{ d }}
      </li>
      <!--オブジェクト(ハッシュ)に対しては丸括弧を使って次のように書きます。  -->
      <li v-for="(k,d,index) in d2">
        {{ k }} -{{ index }}- {{ d }}
      </li>
      <!-- オブジェクトの配列 -->
      <li v-for="(d,index) in d3">
        {{index}}:{{ d.name}} - {{d,score}}
      </li>
      <!-- 範囲のforとしても使える。 -->
      <li v-for="(d,index) in 5">
        {{index}}- {{ d }}
      </li>
    </ul>
  </div>
  <!-- Vue.js -->
  <script src="https://npmcdn.com/vue/dist/vue.js"></script>
  <!-- code -->
  <script>
    // object(ViewMode) - data/methods(Model) <--> interface(View)
    var vm = new Vue({
      el: '#myapp',
      data: {
        d1: ['a', 'b'],
        // オブジェクト(ハッシュ)
        d2: {
          k1: 'v1',
          k2: 'v2'
        },
        d3: [{
            name: 'taguchi',
            score: 62
          },
          {
            name: 'endo',
            score: 84
          }
        ]
      }
    });
  </script>
</body>
```

result

```js
0- a
1- b
v1 -0- k1
v2 -1- k2
0:taguchi - { "name": "taguchi", "score": 62 }
1:endo - { "name": "endo", "score": 84 }
0- 1
1- 2
2- 3
3- 4
4- 5
```

また`v-for="item in 5"`とかいれて範囲をしていして表示を5回繰り返すって事も出来る。

## v-model

フォームとモデルを連動させるための v-model というディレクティブについて見ていきます。

- [フォーム入力バインディング](https://jp.vuejs.org/v2/guide/forms.html)

>form の input 要素 と textarea 要素で双方向 (two-way) データバインディングを作成するには、v-model ディレクティブを使用することができます。それは、自動的に入力されたタイプに基づいて要素を更新するための正しい方法を選択します。わずかな魔法とはいえ、v-model は本質的にユーザーの入力イベントにおいてデータを更新するための糖衣構文 (syntax sugar) で、そのうえ、いくつかのエッジケースに対して特別な配慮が必要です。

なにいってるのか全然わからないので、書いていきます。

ex:1 v-modelを使った最初の例。

```html
<html>
<head lang="ja">
    <meta charset="utf-8">
    <title>My Vue.js Practice</title>
</head>
<body>
<h1>Vue.jsチュートリアル</h1>

<!-- formとmodelを連動させる。 -->
<div id="myapp" >
  <p>
    <input type="text" v-model="name">
    {{ name }}
  </p>

  <p>
    <input type="checkbox" v-model="isAdmin">
    <!-- adminがtrueだったら表示して、そうじゃなかったらno adminを表示させる。 -->
    {{ isAdmin ? "admin" : "no admin" }}
  </p>


    <p>
      <input type="radio" name="phone" v-model="phone" value="iphone">
        <input type="radio" name="phone" v-model="phone" value="android">
      {{ phone }}
    </p>

    <p>
      <select v-model="city">
        <option value="tokyo">Tokyo</option>
        <option value="chiba">Chiba</option>
        <option value="saitama">Saitama</option>
      </select>
      {{ city }}
    </p>

</div>
<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// object(ViewMode) - data/methods(Model) <--> interface(View)
var vm =new Vue({
  el: '#myapp',
  data:{
    // 初期データ
    name:"taguchi",
    isAdmin:true,
    phone:"iphone",
    city:"tokyo"
  }
});
</script>
</body>
</html>
```

ex2: v-modelを使った例2(`var vm =new Vue({});`の`data`の中身と合わす必要がある。!)


```js
<h1>Vue.js</h1>
<h2>v-modelでどんどん入力していく</h2>

<!-- formとmodelを連動させる。 -->
<div id="myapp" >
  <span>複数行メッセージ</span>
  <p style="white-space:pre"> {{ msg }}</p>
  <p>___</p>
  <textarea v-model="msg" placeholder="文字を入力して下さい。"></textarea>
</div>
<!-- Vue.js -->
<script src="https://npmcdn.com/vue/dist/vue.js"></script>
<!-- code -->
<script>
// object(ViewMode) - data/methods(Model) <--> interface(View)
var vm =new Vue({
  el: '#myapp',
  data:{
    // 初期データ
    msg:"Hello!",
    isAdmin:true,
    phone:"iphone",
    city:"tokyo"
  }
});
</script>
</body>
```

## フィルター(filters)

- ~~[フィルタ](http://012-jp.vuejs.org/guide/filters.html)~~
~~vue.js には便利なフィルタという機能が用意されていて、このように`|`（パイプ）で繋いであげて任意のフィルタ関数を作って適用させる事ができます。フィルタは、 ディレクティブの値の最後に位置しなければなりません。また復数のフィルタを連結させる事もできます。~~

vue1.0xではbuilt-inのフィルタ(capitalize,uppercase,lowercase)のディレクティブとして使う事ができましたが、v2.0xでは**built-in**のフィルタは全てなくなっています。従ってJSコードやサードパーティを使い、代わりに使ったり、またlimitBy,filterBy,orderByに関してはcomputedプロパティもしくはメソッドとして定義してやる必要があります。

- [Vue.js 2.xのフィルタについて調べてみた](http://qiita.com/yutaro23/items/095cf66038bb9fabc094)
- [ィルタ外でのテキスト展開(削除)](https://jp.vuejs.org/v2/guide/migration.html#フィルタ外でのテキスト展開-削除)


また公式より、

>今までの v-model や v-on ディレクティブ上でのフィルタリングは、それ自体
の利便性よりも、コードの複雑化につながることのほうが多いことに気がつきました。v-for 上でのリ
ストのフィルタリングについては、それをコンポーネント上で再利用可能とするために、算出プロパテ
ィとして JavaScript 上のそのロジックを移動させるようにしても良いでしょう。
