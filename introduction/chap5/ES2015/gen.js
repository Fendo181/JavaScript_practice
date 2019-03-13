function * myGenerator(){
    yield 'あいうえお';
    yield 'abcdefg';
    yield '1234567';
}

for(let t of myGenerator()){
    console.log(t);
}


// あいうえお
// abcdefg
// 1234567
