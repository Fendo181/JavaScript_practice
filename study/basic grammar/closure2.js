newFunction();

function newFunction() {
    var pet = function(name) {
        // 内側の関数は外側の関数の変数 "name" にアクセス可能
        var getName = function() {
            return name;
        };
        return getName;
    };
    myPet = pet("Vivie");
    console.log(myPet());
}

