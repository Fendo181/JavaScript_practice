let dataAry = ['one', 'two', 'three']
let dataStr = 'あいうえお'
let dataMap = new Map([['MON', '月曜日'], ['TUE', '火曜日'], ['WED', '水曜日']])

for (let d of dataAry) {
  console.log(d)
}

for (let d of dataStr) {
  console.log(d)
}

for (let [key, value] of dataMap) {
  console.log(`${key}:${value}`)
}
