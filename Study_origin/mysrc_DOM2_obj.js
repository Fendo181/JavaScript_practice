var e = document.getElementById('msg');
e.textContent = "Hello";
e.style.color = 'red';
e.className = `mystyle`;


//addEventListener の第 1 引数にはイベントの種類を割り当てます。
//第 2 引数には関数を与えるのですが、今回はその場限りなので無名関数で OK かと思います。

document.getElementById('add').addEventListener('click',function() {
    var greed = document.createElement('p'),
        text = document.createTextNode('Yeaaa');
    document.body.appendChild(greed).appendChild(text);
});
