// console.dir(window); //windowsというオブジェクト
// console.log(window.outerHeight); //windowの高さ　
// // /*ハイパーリンク*/
// window.location.href = 'http://dotinstall.com/lessons/basic_javascript_v2/26722';
// window.document //今開いているページ
// //document object Model

var e = document.getElementById('msg');
e.textContent = "Hello";
e.style.color = 'red';
e.className = `mystyle`;

// 新しく自分で要素を作る
// body 要素の中に、p 要素を追加して、
// その p 要素の中にtext を仕込んでみたいと思います。

var greed = document.createElement('p'),
    text = document.createTextNode('Yeaaa');

//document.body.appendChild()」というのを使えば子要素の
//最後に追加してくれます。

document.body.appendChild(greed).appendChild(text);
