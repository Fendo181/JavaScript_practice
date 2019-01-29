var scope = 'Global Scope';

function getValue() {
    var scope = 'Local Scope';
    return scope;
}

console.log(getValue());  //local
console.log(scope); //global
