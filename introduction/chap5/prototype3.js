// クラス宣言
var Member = function () {}

Member.prototype.sex = 'Man'

var mem1 = new Member()
var mem2 = new Member()

console.log(mem1.sex + '|' + mem2.sex)
mem2.sex = 'Woman' // mem2は独立している
console.log(mem1.sex + '|' + mem2.sex)

// インスタンス変数me1のsexプロパティを削除しよとするが、宣言してないので削除されない。
delete mem1.sex
delete mem2.sex
// 結果MemberクラスのプロトタイプのMember.prototype.sexまでは削除されないので表示される
console.log(mem1.sex + '|' + mem2.sex)
