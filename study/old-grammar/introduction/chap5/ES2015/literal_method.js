// オブジェクトリテラルの改善
let member = {
  name: '山田太郎',
  birth: new Date(1970, 5, 25),
  toString () {
    return this.name + '/誕生日:' + this.birth.toLocaleDateString()
  }
}

console.log(member.toString())

// 山田太郎/誕生日:1970-6-25
