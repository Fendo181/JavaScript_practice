let dataAry = ['one', 'two', 'three']
let itr = dataAry[Symbol.iterator]()
console.log(itr) // Object [Array Iterator] {}
console.log(itr.next()) // { value: 'one', done: false }
let num

while (num = itr.next()) {
  // イテレータが終端に到達したか(次の要素はないか)
  if (num.done) {
    console.log(num.done) // true
    break
  }
  console.log(num.done)
  // 次の要素の値
  console.log(num.value)
}
