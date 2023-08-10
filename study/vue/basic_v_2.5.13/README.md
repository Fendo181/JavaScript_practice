## Vue.jsを学ぶ

[前回](https://github.com/Fendo181/js_repos/tree/master/vue/basic_v_0.11.4)学んだが、すべての知識が溶けたので再度学習を行う。

## 特徴

- 双方向データバインディング
  - データバインディングというのは data と UI を結び付けるという意味です。
  - 双方向というのは data を更新すれば UI が更新されて、 UI を更新すれば data が更新されるという意味です。


## 呼び出し方

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## Vue.jsの基本


### 宣言的レンダリング

#### UIに紐づく ViewModel を定義する

ex) main.js

```js
<script>
    const app = new Vue({
        // どのHTMLのVueと結びつけるかを elements の略である el というキーで指定してあげます。
        // id = app
        el: '#app',
        data: {
            name: 'Fendo181'
        }
    });
</script>
```

#### v-modelで紐づけをする

ex) index.html

```html
<div id="app">
<!--  {{ }}で呼び出す -->
<p> Hello My Name Is {{ name }! </p>
<p>
    <!-- v-modelでViewModelと結びつける -->
    <input type="text" v-model="name">
</p>
</div>
```

```md
Hello My Name Is Fendo181!
```
### 条件分岐とループ

#### `v-for`ディレクティブ

ex) main.js

```js
const vm =new Vue({
    el: '.app',
    data: {
        todos:
        [
            {
            title: 'task1',
            },
            {
            title: 'task2',
            },
            {
            title: 'task3',
            },
        ],
    }
});
```
ex) index.html

```html
<div class="app">
    <ul>
        <li v-for="(todo,index) in todos">
            {{ todo.title }}
        </li>
    </ul>
</div>
```

____


#### `v-if`ディレクティブ

ex) main.js

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})();
```

ex) index.html

```html
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>
```

 ※v-for は v-if よりも先に実行される。

 [スタイルガイド — v-for と一緒に v-if を使うのを避けるVue.js](https://jp.vuejs.org/v2/style-guide/#v-for-%E3%81%A8%E4%B8%80%E7%B7%92%E3%81%AB-v-if-%E3%82%92%E4%BD%BF%E3%81%86%E3%81%AE%E3%82%92%E9%81%BF%E3%81%91%E3%82%8B-%E5%BF%85%E9%A0%88)


### ユーザ入力制御

#### `v-on`ディレクティブ

- イベントを紐付ける事ができる
- `@`マークで省略可能
- Vueモデルの`methods`でイベントを定義をする。

ex) main.js


```js
var app = new Vue({
  el: '#app',
    data: {
        todos:
        [

        ],
    },
    methods:{
    addItem: function(){
        this.todos.push(this.newItem)
        },
})();
```
ex)index.html

```html
    <form @submit.prevent="addItem" >
        <input type="text" v-model="newItem">
        <input type="submit" value="Todo リストを加える">
    </form>
```

### コンポーネントの構成

#### `Vue.component`

```js
// my-component という id でコンストラクタを登録する
Vue.component('my-component', MyComponent)
```

- クラス継承メソッド
- オブジェクトを直接してしたい場合は内部的に`Vue.extend`を呼び出す。

```js
// Note: この関数はグローバルな Vue を返し、
// 登録されたコンストラクタを返すものではありません。
Vue.component('my-component', {
  template: '<p>A custom component!</p>'
})
```

#### `Vue.extend`

```js
// 再利用可能なコンストラクタを取得するために Vue を拡張します
var MyComponent = Vue.extend({
  template: '<p>A custom component!</p>'
})
```

- アセット登録メソッド
- `el`と`data`に関しては、メソッドで呼び出すて返して上げる必要がある。

```js
var ComponentWithDefaultData = Vue.extend({
  data: function () {
    return {
      title: 'Hello!'
    }
  }
})
```

### `Vue.component`と`Vue.extend`の違い

>Vue.extend() と Vue.component() の違いを理解することは重要です。Vue 自身はコンストラクタであるため、Vue.extend() はクラス継承メソッドです。そのタスクは Vue のサブクラスを生成して、そのコンストラクタを返すものです。一方、 Vue.component() はアセット登録メソッドであり、Vue.directive() や Vue.filter() と類似しています。そのタスクは与えられたコンストラクタに文字列のIDを関連付けて、 Vue.js がそれをテンプレートの中で利用できるようにするものです。直接 Vue.component() にオプションを渡した時は、内部的に Vue.extend() が呼ばれます。

ref:[コンポーネントシステム - vue.js](https://012-jp.vuejs.org/guide/components.html)


## 参考資料

- [Vue.js入門 (全17回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_vuejs_v2)
- [公式](https://jp.vuejs.org/)
- [Vue.js(Github)](https://github.com/vuejs/vue)
- [Vue Mastery | The Ultimate Learning Resource for Vue.js Developers](https://www.vuemastery.com/courses/intro-to-vue-js/)
