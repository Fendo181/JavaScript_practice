## Node.JSを学ぶ

node.jsの基本を学ぶ。

## Node.jsとは?

- 大量のリクエストを高速にさばくアプリケーションを作るためのプラットフォーム
- Node.jsはイベントモデルを採用して複数のリクエストをさばける仕組みになっている
  - 「Non-blockingで記述しなければならない
  - >リクエストが来た場合、スレッドモデルだとその度に新しくスレッドをたちあげる必要がありましたが、イベントループでは単にこちらのキューに登録していくだけです。そしてループがまわってきてキューに何かが登録されているのを見たら順番にバッググラウンドの処理にまわしていきます。


### 参考資料

- [Node.js](https://nodejs.org/ja/)
- [Node.js入門 ~ サーバーサイドJavaScriptを根本から理解する](https://nakanoh.net/article/node-entry-book)
- [Nodeビギナーズブック](https://www.nodebeginner.org/index-jp.html)

