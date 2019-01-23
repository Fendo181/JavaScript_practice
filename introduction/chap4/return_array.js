function getMaxMin(...nums){
    return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10,20,30,40,50);
console.log(result);

let [max,min] = getMaxMin(-10,15,32,25,42);
console.log(max);
console.log(min);

// [ 50, 10 ]
// 42
// -10

