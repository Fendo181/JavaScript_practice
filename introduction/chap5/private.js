function Triangle() {
    var _base;
    var _height;
    // プライベーメソッドの定義(引数が正の数値であるかをチェック)
    var _cgeckArgs = function(val) {
        return (typeof val === 'number' && val >0)
    }
    // プライベートメンバーにアクセスする為のメソッド
    this.setBase = function(base){
        if(_cgeckArgs(base)) { _base = base; }
    }
    this.getBase = function(){ return _base; };

    this.setHeight = function(height){
        if(_cgeckArgs(height)) { _height = height; }
    }
    this.getHeight= function(){ return _height; };
}

// プライベートメンバーにアクセスしない普通のメソッド
Triangle.prototype.getArea = function() {
    return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
t._base = 10;
t._height = 2;
console.log('三角形の面積:' + t.getArea());

t.setBase(10);
t.setHeight(5);

console.log('三角形の底辺' + t.getBase());
console.log('三角形の高さ' + t.getHeight());
console.log('三角形の面積' + t.getArea());

