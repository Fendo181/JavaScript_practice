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


## 参考資料

- [Vue.js入門 (全17回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_vuejs_v2)
- [公式](https://jp.vuejs.org/)
- [Vue.js(Github)](https://github.com/vuejs/vue)
- [Vue Mastery | The Ultimate Learning Resource for Vue.js Developers](https://www.vuemastery.com/courses/intro-to-vue-js/)
