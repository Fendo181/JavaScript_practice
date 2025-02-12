## Reactの基礎文法を学ぶ

今後、業務でもReactを本格的に使うにあたって、今の内からReactの基礎文法を学んでおきたいと思います。

## そもそもReactとはなにか?

Reactは、Facebookが開発したユーザーインターフェース（UI）を構築するためのJavaScriptライブラリです。

https://github.com/facebook/react

特徴としては以下があります。

- (1) コンポーネントベースの開発
  - 例えば、「ヘッダー」「サイドバー」「記事一覧」などを別々のコンポーネントとして作り、組み合わせることができます

```jsx
function Header() {
  return <header>ヘッダー部分</header>;
}

function Sidebar() {
  return <nav>サイドバーの内容</nav>;
}
```

- (2) 仮想DOM（`Virtual DOM`）による高速な画面更新
  - 画面の変更箇所を最小限に抑え、効率的に更新します
  - ユーザー体験が向上し、スムーズな操作感を実現できます
- (3) データの一方向の流れ（単一方向データフロー)
  - データの流れが予測しやすく、バグを見つけやすい
- (4)jsxで書ける。
  - JavaScriptの拡張構文で、HTMLのように見えるが、JavaScriptの構文で書かれています。
  
```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増やす
      </button>
    </div>
  );
}
```

## Hooksについて

`Hooks`は、React 16.8で導入された機能で、関数コンポーネントで状態（state）やライフサイクルなどの機能を使えるようにする仕組みです。

[組み込みの React フック – React](https://ja.react.dev/reference/react/hooks)

### `useState`: 最も基本的なHookで、状態を管理するためのもの

```jsx
function Counter() {
  const [count, setCount] = useState(0);  // 状態の初期値は0
  
  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>増やす</button>
    </div>
  );
}
```

### `useEffect`: コンポーネントがマウントされた後やアップデートされた後に何か処理を実行したい場合に使う
 - 副作用（データフェッチ、DOM操作など）を扱うためのHookです。
 - ※注意として使う場面を間違ってしまうと、無限ループに陥る可能性があるので、注意が必要です。

[そのエフェクトは不要かも – React](https://ja.react.dev/learn/you-might-not-need-an-effect)


### `useContext`: Reactのコンテキストを簡単に利用するためのHookです。
  - コンテキストは、Reactのコンポーネントツリー全体でデータを共有するための仕組みです
  - 例えば、テーマや言語などの情報を共有する場合に使います


```jsx
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>テーマ付きボタン</button>;
}
```

### Hooksを使う場合のルール

- (1)トップレベルで呼び出す
- (2)ループ、条件分岐、ネストされた関数内で呼び出さない
- (3)カスタムフックを使ってロジックを共有する
- (4)Reactの関数コンポーネント内でのみ呼び出す

これらを守る事でコンポーネント事にパーツが再利用ができて、コードが簡潔になります

## JSXのルールについて

- `JSX` では class 属性については、`className`を指定する
  - `className`のNameは必ず大文字を指定する

## Reactのコンポーネントのルールについて

Reactにおけるコンポーネントとは、UIを構成する部品のことで関数で書くことが可能です。

```jsx
function Header() {
  return <header>ヘッダー部分</header>;
}
```


## Propsについて

Propsは、コンポーネントに渡すデータのことで、親コンポーネントから子コンポーネントにデータを渡すために使います。

```jsx
function User(props) {
  // nameにはAliceが入ってくる
  return <div>{props.name}</div>;
}

function App() {
  return <User name="Alice" />;
}
```

JSXで受け取った値を表示する場合は、`{}`で囲むことで表示することができます。

## リスト項目を扱う場合について

Reactでは、リスト項目を表示する際には、`map`メソッドを使って表示することができます。

```jsx
function UserList() {
  const users = [
    { id:1, name: 'Alice' },
    { id:2, name: 'Bob' },
    { id:3, name: 'Charlie' },
  ];

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

注意点として、リストの項目には `key` という属性でユニークな値を付けておく必要があります。
keこれはReactの仮想DOM（Virtual DOM）における差分検出と再レンダリングの最適化が主な理由です。
また、`key` は特殊な属性で props ではアクセスできないので、keyに相当するIDにアクセスしたい場合は別途作る必要があります。

```jsx
const menuItems = menus.map((menu)=> {
  return (
    <Menu 
    key={menu.id} // propsに渡せない
    menuId={menu.id} // propsに渡せる
    />
  );
});
```

## UseStateについて

`useState`は、ReactのHooksで、状態を管理できます。

```jsx
function Counter() {
  // countの値を変更するための関数
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増やす
      </button>
    </div>
  );
}
```

上記サンプルコードで、`count`はconstで宣言されていますが、setCountを実行すると古い値破棄されて、新しい `count` の値で、またこのコンポーネントが作り直されるという仕組みです。

### UseStateを使う場合の注意について

`useState` で管理するデータは複雑になってくるとそのデータを更新するための処理が複雑になったり、設計によってはパフォーマンスが落ちてしまうこともあります。なので、`useState` で管理するデータは、できるだけシンプルにすることが重要です。

## 値の更新のタイミングについて

Reactのコンポーネントは、状態が変更されると再レンダリングされます。
たとえば、とあるボタンをクリックした際に3回カウントアップする処理を実装する場合、以下のように書くとうまくいかないです。

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={handleClick}>
        増やす
      </button>
    </div>
  );
}
```

これは、`setCount` はあくまでも動作を予約するだけで即座に `count` の値を変更するわけではないためです。仕組みとしては、`setCount` は React に対して `count` の値を変更するように指示するだけで、React はその指示を受け取り、次のレンダリング時に `count` の値を変更します。
これは以下のようにすれば、正しく動作します。

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    setCount((prevCount) => {return prevCount + 1; });
    setCount((prevCount) => {return prevCount + 1; });
  };
}
```


### 参考

- https://dotinstall.com/lessons/basic_reactjs_v2
- https://speakerdeck.com/recruitengineers/react-yan-xiu-2024
- https://qiita.com/rion0726ittoti/items/558592a8bb73163d9964
