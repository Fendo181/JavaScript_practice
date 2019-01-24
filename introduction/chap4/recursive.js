function factorial(n) {
    if(n != 0){
        return n*factorial(n-1);
    }
    return 1;
}

// 再帰関数
console.log(factorial(4));

