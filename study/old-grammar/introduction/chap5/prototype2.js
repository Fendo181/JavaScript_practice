var Member = function () {}

// プロトタイプでプロパティを追加
Member.prototype.sex = 'Men'

// インスタンス化
var mem1 = new Member()
var mem2 = new Member()

console.log(mem1.sex + '|' + mem2.sex)
mem2.sex = 'Woman'
console.log(mem1.sex + '|' + mem2.sex)

// Men|Men
// Men|Woman
