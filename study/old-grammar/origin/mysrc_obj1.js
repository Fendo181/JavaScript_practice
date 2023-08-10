// var user ={
//     email:"endo@email.com", //プロパティ名
//     score:80
// };
//
// //プロパティ名にアクセスする
// console.log(user["email"]);
// console.log(user.email); //こっち推奨
//
// console.log(user.score);
// user.score = 100
// console.log(user.score);

var user = {
    email:"endo@email.com",
    score:120,
    greed:function(name){//オブジェクト内の関数をメソッドと呼ぶ

        console.log("hello!,"+name+"!.form"+ this.email);
    }
};
console.log(user.email);
console.log(user.score);
//メソッド呼びだし
user.greed("endo");
