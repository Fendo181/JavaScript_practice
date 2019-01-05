"use strict";

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.addEventListener('click', function () {
        div.classList.toggle('circle');
    });
    // bodyの小要素として追加する
    document.body.appendChild(div);
}
