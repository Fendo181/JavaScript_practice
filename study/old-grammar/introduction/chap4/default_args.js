function getTriangle (base, height) {
  // デフォルト値の書き方
  if (base === undefined) { base = 1 }
  // デフォルト値の書き方
  if (height === undefined) { height = 1 }
  return base * height / 2
}

console.log(getTriangle(10))
