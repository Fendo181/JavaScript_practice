let date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = date.filter(function (value, index, arrqay) {
  return value % 2 === 1
})

console.log(result)
