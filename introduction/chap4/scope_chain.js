var y = 'Global';
function otherFunc()
{
    var y = 'Loacal Outer';
    function innerFunc()
    {
        var z = 'Loacl Inner';
        console.log(z)
        console.log(y);
        console.log(x);
    }
    innerFunc();
}
otherFunc();
