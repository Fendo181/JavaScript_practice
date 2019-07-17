var value = [1, 2, 3, 4, 8, 16]

function deleteElement (value) {
  value.pop()
  return value
}

console.log(deleteElement(value)) // [ 1, 2, 3, 4, 8 ]
console.log(value) // [ 1, 2, 3, 4, 8 ]
