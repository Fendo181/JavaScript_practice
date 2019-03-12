function * genPrime(){
    let num = 2; //素数の開始地
    //  無限ループ
    while(true){
        if(isPrime(num)) {
            yield num;
        }
        num++;
    }
}

function isPrime(value){
    let prime = true
    console.log(`for:${Math.floor(Math.sqrt(value))}`);

    for(let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
        // 割り切れたら素数ではない
        if(value % i === 0){
            prime = false
            break;
        }
    }
    return prime;
}

for(let value of genPrime()){
    if(value > 100 ){
        break;
    }
    console.log(value);
}
