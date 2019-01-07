// オブジェクトの生成方法
// 1 {}で囲む
let obj = { x:1,y:2,z:3};

// 2 newした後にプロパティを追加する
let obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

// 3 Object.createを使う
let obj3 = Object.create(Object.prototype,{
    x : {value: 1 , writable:true, configurable: true, enumerable:true},
    y : {value: 2 , writable:true, configurable: true, enumerable:true},
    z : {value: 3 , writable:true, configurable: true, enumerable:true},
});

console.log(obj);
console.log(obj2);
console.log(obj3);

