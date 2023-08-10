let data = { red: '赤', yellow: '黄色' }
// date:操作を差し挟む大賞オブジェクト
// handler:ターゲットの操作を定義する為のオブジェクト
let proxy = new Proxy(data, {
  get (target, prop) {
    return prop in target ? target[prop] : '?'
  }
})

console.log(proxy.red) // 赤
console.log(proxy.nothing) // ?
console.log(proxy.yellow) // 黄色

data.blue = '青'

console.log(data.blue) // 青
console.log(proxy.blue) // 青
