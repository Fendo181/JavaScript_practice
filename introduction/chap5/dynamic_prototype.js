// クラス
var Member = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let mem = new Member('博','山田');

// インスタンス後に追加したメソッド
Member.prototype.getName = function(){
    return this.firstName + this.lastName;
}

console.log(mem.getName()); //博山田
