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
    console.log(`for:${value}の平方根は${Math.sqrt(value)}`);

    for(let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
        console.log(`i:${i}`);
        // 割り切れたら素数ではない
        if(value % i === 0){
            console.log(`素数でない`);
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
