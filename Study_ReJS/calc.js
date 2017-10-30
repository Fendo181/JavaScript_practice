var name = prompt("名前は?")
console.log(name)

function calc(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    max = (num1>num2) ? num1 : num2;
    console.log(max)
}