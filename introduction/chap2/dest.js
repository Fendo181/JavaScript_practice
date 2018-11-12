let data = [10,20,30,40,50,50,60];
let [x1,x2, ...other] = data;

console.log(x1);
console.log(x2);
console.log(other);

// 10
// 20
// [ 30, 40, 50, 50, 60 ]
