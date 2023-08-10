"use strict";

const num = 5;
// 0~5以上のランダムな数字を出す、
const winner = Math.floor(Math.random()*num);

for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    if( i === winner ){
        div.dataset.result = 'win';
    }else {
        div.dataset.result = 'lose';
    }

    div.addEventListener('click', function () {
        if( div.dataset.result === 'win' ){
            div.textContent = 'あたりです！'
            div.classList.add('win');
        }else {
            div.textContent = 'ハズレです'
            div.classList.add('lose');
        }
    });
    // bodyの小要素として追加する
    document.body.appendChild(div);
}
