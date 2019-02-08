// クラス
var Member = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// クラスに追加したメソッド
Member.prototype.getName = function(){
    return this.firstName + this.lastName;
}

let mem = new Member('博','山田');
console.log(mem.getName()); //博山田


var mem2 = new Member('高橋','清太郎');
console.log(mem2.getName()); //橋清太郎
