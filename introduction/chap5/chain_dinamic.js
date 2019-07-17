// クラス宣言
var Animal = function () {}
// プロトタイプメソッド
Animal.prototype = {
  walk: function () {
    console.log('よっすよっす')
  }
}

var SuperAnimal = function () {}
SuperAnimal.prototype = {
  walk: function () {
    console.log('ダダダだ!')
  }
}
// プロトタイプチェーン
var Dog = function () {}
Dog.prototype = new Animal()

// インスタンス生成
var d1 = new Dog()
d1.walk() // よっすよっす

Dog.prototype = new SuperAnimal()

// インスタンス生成
var d2 = new Dog()
d2.walk() // ダダダだ!
d1.walk() // よっすよっす

// よっすよっす
// わんわん!
