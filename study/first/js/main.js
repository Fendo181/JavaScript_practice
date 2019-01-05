"use strict";
let tartget1 = document.getElementById('target1');
let tartget2 = document.getElementById('target2');
let tartget3 = document.getElementById('target3');
let tartget4 = document.getElementById('target4');

// クリックしたときに動作させる
tartget1.addEventListener('click' , function(){
    tartget1.classList.toggle('circle');
});
tartget2.addEventListener('click' , function(){
    tartget2.classList.toggle('circle');
});
tartget3.addEventListener('click' , function(){
    tartget3.classList.toggle('circle');
});
tartget4.addEventListener('click' , function(){
    tartget4.classList.toggle('circle');
});
