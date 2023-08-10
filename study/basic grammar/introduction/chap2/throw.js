let x = 1
let y = 0

try {
  if (y === 0) {
    throw new Error('0で除算しました')
    let z = x / y
  }
} catch (error) {
  console.log(error.message) // 0で除算しました
}
