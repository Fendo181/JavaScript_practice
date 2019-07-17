let book = { title: 'JavaScriptを学びましょう',
  publish: '技術評論',
  price: '1200',
  other: { keyword: 'Java SE', logo: 'logo.jpg' }
}
let { title, other, other: { keyword } } = book

console.log(title)
console.log(other)
console.log(keyword)
