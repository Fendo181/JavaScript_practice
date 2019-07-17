function getTriangle (base, height) {
  return (base * height) / 2
}

// 文字列連結
console.log('三角形の面積は' + getTriangle(10, 20))
let triangle = getTriangle(122, 13)
// 文字列内展開
console.log(`${triangle}`)

// 三角形の面積は100
// 793
