class MyIterator {
  constructor (data) {
    this.data = data
  }
  // デフォルトイテレータを取得する為のメソッドを定義する
  [Symbol.iterator] () {
    let current = 0
    let that = this
    console.log(this) // MyIterator { data: [ 'one', 'two', 'three' ] }
    // プロパティ
    return {
      // dataプロパティの次の要素を取得する
      next () {
        // dataプロパティの次の要素を取得
        return current < that.data.length
          ? { value: that.data[current++], done: false }
          : { done: true }
      }
    }
  }
}

let itr = new MyIterator(['one', 'two', 'three'])
// fo ofを実行することで自動的にArrayオブジェクトのメンバーをイテレータで呼び出している
for (let value of itr) {
  console.log(value)
  // one
  // two
  // three
}
