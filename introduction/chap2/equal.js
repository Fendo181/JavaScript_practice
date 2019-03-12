let x = 1
let y = x // 代入

x = 2
console.log(y)

const data1 = [0, 1, 2] // 配列
// data1 = [1,2,3]; # 定数を再定義しようとするとエラー
let data2 = data1 // 元の配列はそのままで、値を追加する OK
data1[0] = 5

console.log(data2)
