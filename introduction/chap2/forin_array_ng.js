let data = ['apple', 'orange', 'banana']
Array.prototype.hoge = function () {}
for (let key in data) {
  console.log(data[key])
}

// apple
// orange
// banana
// [Function] //なぜか追加されている
