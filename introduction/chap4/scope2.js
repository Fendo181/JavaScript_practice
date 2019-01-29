scope = 'Global Scope';

function getValue() {
    cope = 'Local Scope';
    return scope;
}

console.log(getValue());  //global
console.log(scope); //global
