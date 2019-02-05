var Member = function(firstName, lastName){
    // グローバル変数(this)が生成されてしまう
    this.firstName = firstName;
    this.lastName = lastName;
};

// コンストラクタ呼び出しだけどオブジェクトが生成されない
var m = Member('菊池','翔太');
console.log(m)
console.log(firstName)
console.log(m.firstName) // Cannot read property 'firstName' of undefined

var  obj = new Member('菊池','翔太');
console.log(obj) //Member { firstName: '菊池', lastName: '翔太' }
