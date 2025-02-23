## Vue3を学ぶ

Vue3の学習を行う為のリポジトリです。

### Vue3の特徴

- コンポーネントベース開発
  - アプリケーションをコンポーネントという小さな部品に分割して開発
  - 再利用性が高く、保守がしやすい
- 双方向データバインディング
  - データの変更がUI上に自動的に反映
  - フォーム入力などのユーザー操作をスムーズに処理
- 高いパフォーマンス
  - 仮想DOM（Virtual DOM）による効率的な画面更新
  - 必要な部分だけを更新する最適化
- 充実した開発者ツール
- ue DevToolsによるデバッグのしやすさ
- エラーメッセージの分かりやすさ

### 基礎概念

- Vue は省略記法がかなりあるので、早いうちに知っていた方が良い。
- Vue では mustaches（二重中括弧）はテキスト補間のみ使用します。動的な値を属性にバインドするのは、`v-bind` ディレクティブを使います:

```vue
<div v-bind:id="dynamicId"></div>
<!-- 以下でも書ける -->
<div :id="dynamicId"></div>
```

- `v-on` ディレクティブを使うことで DOM イベントを購読することができます:

```vue
<button v-on:click="increment">{{ count }}</button>
<!-- 省略記法 -->
<button @click="increment">{{ count }}</button>
```

- `v-bind` と `v-on` を一緒に使うことで、input 要素に双方向（two-way）バインディングを作成することができます。
  - これは、フォーム入力やアプリケーションの状態を DOM に結びつけるためによく使われます。
  - また、`v-model` ディレクティブを使っても実現できます。
  - この事を双方向データバインディングと呼びます。

```vue
<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
	<!-- これでも同じ?   -->
  <input v-bind:value="text" v-on:input="onInput" placeholder="Type here! here!!">
  <p>{{ text }}</p>
	<!-- 省略形   -->
  <input v-model="text" placeholder="Type here! model!!">
  <p>{{ text }}</p>
</template>
```

- v-if ディレクティブを使用すると、条件に基づいて要素を描画するかどうかを制御できます。
  - v-else-if と v-else ディレクティブを使って、より複雑な条件を表現することもできます。

```vue
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
```

- v-forディレクティブを使用すると、配列の各要素に対して繰り返し描画することができます。
  - また、オブジェクトのプロパティに対しても繰り返し描画することができます。

```vue
<script setup>
import { ref } from 'vue'

// give each todo a unique id
let id = 0
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>
```

- computedプロパティを使用すると、算出プロパティを定義できます。
  - 算出プロパティは、その結果をキャッシュし、依存関係が変更されたときだけ再評価されます。
  - これにより、テンプレート内で算出プロパティを呼び出すたびに、関連する依存関係を再計算する必要がなくなります。


- `onMounted` は、コンポーネントがマウントされた後に実行される関数を定義します。
  - これは、コンポーネントの初期化処理を行うのに便利です。
  - これはVueJSのライフサイクルフックの一つです。
  - 他にも`onUpdated` や `onUnmounted` があります。

```vue
<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)
onMounted(()=>{
  pElementRef.value.textContent = 'どうも!!'
})
</script>

<template>
  <p ref="pElementRef">Hello!!</p>
</template>
```

- `watch` 関数を使用すると、リアクティブなデータの変更を監視し、その変更に応じて副作用を実行できます。
  - これは、データの変更に応じて非同期処理を実行する場合などに便利です。
- `props` は、コンポーネントに渡されたプロパティを受け取るための特別な関数です。
  - これは、親コンポーネントから子コンポーネントにデータを渡すために使用されます。

渡し方

子どものコンポーネント
```vue
<script setup>
const props = defineProps({
  msg: String
})
</script>

<template>
  <h2>{{ msg || 'No props passed yet' }}</h2>
</template>
```

親のコンポーネント

```
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const greeting = ref('ここだよ~!!')
</script>

<template>
  <ChildComp :msg="greeting" />
</template>
```

- `emit` 関数を使用すると、イベントを発行して親コンポーネントにデータを渡すことができます。
  - これは、子コンポーネントから親コンポーネントにデータを渡すために使用されます。

### 参考ドキュメント

- https://ja.vuejs.org/tutoria
