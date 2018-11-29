let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1); //symbol
console.log(sym1.toString()); //Symbol(sym)
console.log(sym1 === sym2); //false
