## Reactの基礎文法を学ぶ

今後、業務でもReactを本格的に使うにあたって、今の内からReactの基礎文法を学んでおきたいと思います。

### そもそもReactとはなにか? 

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

- (2) 仮想DOM（Virtual DOM）による高速な画面更新
  - 画面の変更箇所を最小限に抑え、効率的に更新します
  - ユーザー体験が向上し、スムーズな操作感を実現できます
- (3) データの一方向の流れ（単一方向データフロー
  - データの流れが予測しやすく、バグを見つけやすい
- (4)jsxで書ける。
  - JavaScriptの拡張構文で、HTMLのように見えるが、JavaScriptの構文で書かれている
  - コンパイル時にJavaScriptに変換される
  - 例えば、以下のように書くことができる
  
```jsx
function Counter() {
    // countの値を変更するための関数
    // useStateはReactのフックで、状態を管理するためのもの
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

### Hooksについて

Hooksは、React 16.8で導入された機能で、関数コンポーネントで状態（state）やライフサイクルなどの機能を使えるようにする仕組みです。

- (1)useState - 最も基本的なHookで、状態を管理するためのもの

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

- (2)`useEffect`: コンポーネントがマウントされた後やアップデートされた後に何か処理を実行したい場合に使う
 - 副作用（データフェッチ、DOM操作など）を扱うためのHook
 - 注意として使う場面を間違ってしまうと、無限ループに陥る可能性があるので、注意が必要です

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // コンポーネントがマウントされた時やuserIdが変更された時に実行
    fetchUser(userId).then(data => setUser(data));
  }, [userId]);  // 依存配列

  return <div>{user ? user.name : 'Loading...'}</div>;
}
```

- (3)`useContext`: Reactのコンテキストを簡単に利用するためのHookです。
  - コンテキストは、Reactのコンポーネントツリー全体でデータを共有するための仕組みです
  - 例えば、テーマや言語などの情報を共有する場合に使います


```jsx
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>テーマ付きボタン</button>;
}
```

Hooksを使う場合のルールとしては以下があります。

- (1)トップレベルで呼び出す
- (2)ループ、条件分岐、ネストされた関数内で呼び出さない
- (3)カスタムフックを使ってロジックを共有する
- (4)Reactの関数コンポーネント内でのみ呼び出す

これらを守る事でコンポーネント事にパーツが再利用ができて、コードが簡潔になります

### JSXのルールについて

- `JSX` では class 属性については、`className`を指定する
  - Nは必ず大文字で始まる。


### 参考

- https://dotinstall.com/lessons/basic_reactjs_v2
- 
