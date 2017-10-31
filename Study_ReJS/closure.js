function func(params) { 
    var value = 1;

    // innerFuncはvalueを参照できる。コピーではない。
    function innerFunc(){
        value = 5;
    }
    innerFunc();
    console.log(value);

}

func()