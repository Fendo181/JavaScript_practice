let data_ary = ['one', 'two', 'three']
let itr = data_ary[Symbol.iterator]()
console.log(itr) // Object [Array Iterator] {}
console.log(itr.next()) // { value: 'one', done: false }
let d

while (d = itr.next()) {
  // イテレータが終端に到達したか(次の要素はないか)
  if (d.done) {
    console.log(d.done) // true
    break
  }
  console.log(d.done)
  // 次の要素の値
  console.log(d.value)
}
