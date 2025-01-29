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

### 参考ドキュメント

- https://ja.vuejs.org/tutoria
