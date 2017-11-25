// userException
function UserException(message) {
    this.message = message;
    this.naem + "userException";  
}


// 文字列として使用されるとき（例 : エラーコンソール上）に
// 例外を整形する
UserException.prototype.toString = function (){
    return this.name + ': "' + this.message + '"';
}
  
  // UserException のインスタンスを作成し、それをスローする
throw new UserException("Value too high");