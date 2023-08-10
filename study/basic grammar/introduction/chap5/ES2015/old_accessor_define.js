// コンストラクタ関数
function Triangle () {
  // プライベート変数を宣言
  var _base
  var _height

  // baseプロパティ
  Object.defineProperty(
    this,
    'base',
    {
      // getter
      get: function () {
        return _base
      },
      // setter
      set: function (base) {
        if (typeof base === 'number' && base > 0) {
          _base = base
        }
      }
    }
  )

  // heightプロパティ
  Object.defineProperty(
    this,
    'height',
    {
      // getter
      get: function () {
        return _height
      },
      // setter
      set: function (height) {
        if (typeof height === 'number' && height > 0) {
          _height = height
        }
      }
    }
  )
};

// プロパティチェーン
Triangle.prototype.getArea = function () {
  return this.base * this.height / 2
}

var t = new Triangle()
t.base = 10
t.height = 2

console.log('三角形の底辺:' + t.base)
console.log('三角形の高さ:' + t.height)
