// クラス宣言
var Member = function(){};

Member.prototype.sex = 'Man';

var mem1 = new Member()
var mem2 = new Member()

console.log(mem1.sex+'|'+mem2.sex);
mem2.sex = 'Woman'; //mem2は独立している
console.log(mem1.sex+'|'+mem2.sex);
mem2.sex = undefined;
// 結果MemberクラスのプロトタイプのMember.prototype.sexまでは削除されないので表示される
console.log(mem1.sex+'|'+mem2.sex);

// Man|Man
// Man|Woman
// Man|undefined

