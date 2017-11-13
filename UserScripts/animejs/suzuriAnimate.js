// ==UserScript==
// @name         suzuri Chrome
// @namespace    http://tampermonkey.net/
// @version      0.12
// @description  Hello Wold!
// @author       Fendo181
// @match        https://suzuri.jp/
// @grant        none
// @require https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js
// ==/UserScript==

(function () {
    'use strict';
    // 要素を取得してくる。
    var suzruiItems = document.querySelectorAll(".js-product");

    suzruiItems[0].addEventListener('mouseover', function (e) {
        // 右回転

        anime({
            targets: '.js-product',
            rotate: 1800,
            // 段々と丸くなる
            borderRadius: 40,
            duration: 30000
        });
    });

    suzruiItems[0].addEventListener('mouseout', function (e) {
        // 左回転

        anime({
            targets: '.js-product',
            rotate: 3600,
            // 段々と四角になる
            borderRadius: 10,
            duration: 30000import { DOMComponent } from 'uturn'

        });
    });

})();