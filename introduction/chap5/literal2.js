var Animal = function (name, weight) {
  this.name = name
  this.weight = weight
}

// オブジェクトリテラル
Animal.prototype = {
  getName: function () {
    return this.name
  },
  getWeight: function () {
    return this.weight
  }
}

let dog = new Animal()

dog.name = 'ポコちゃん'
dog.weight = 23

console.log(dog.getName())
console.log(dog.getWeight())
