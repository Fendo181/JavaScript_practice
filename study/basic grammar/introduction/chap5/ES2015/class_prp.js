class Member {
  // コンストラクタ
  constructor (firstName, lastName) {
    // プライベート変数
    this._firstName = firstName
    this._lastName = lastName
  }

  // firstNameプロパティ
  get firstName () {
    return this._firstName
  }

  set firstName (value) {
    this._firstName = value
  }

  // lastNameプロパティ
  get lastName () {
    return this._lastName
  }

  set lastName (value) {
    this._lastName = value
  }

  // メソッド
  getName () {
    return this._firstName + this._lastName
  }
}

let men = new Member('遠藤', '太徳')
console.log(men.getName())

// get setを使う p255にも
men.firstName = '菊池'
men.lastName = '翔太'
console.log(men.getName()) // 池翔太
