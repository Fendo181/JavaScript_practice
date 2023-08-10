let pet = {
  type: 'すのーほわいと',
  name: 'キラ',
  description: {
    birth: '2014-02-15'
  }
}

let human = {
  type: '山田きら',
  color: '白',
  description: {
    food: 'ひまわり'
  }
}

let mergeObj = Object.assign({}, pet, human)
console.log(mergeObj)
