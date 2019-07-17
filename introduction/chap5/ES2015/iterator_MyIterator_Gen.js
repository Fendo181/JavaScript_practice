class MyIterator {
  constructor (data) {
    this.data = data
    // デフォルトイテレータを取得する為のメソッドを定義する
    this[Symbol.iterator] = function * () {
      let current = 0
      let that = this
      console.log(this) // [Symbol(Symbol.iterator)]: [GeneratorFunction] }
      while (current < that.data.length) {
        yield that.data[current++]
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
