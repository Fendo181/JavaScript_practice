// ==UserScript==
// @name        jayounal page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://suzuri.jp/surisurikun/journals/2017-10-17
// @grant        none
// ==/UserScript==

(function (){
    
    'user strict';
    
        var categoriNavi = document.querySelectorAll('.js-ncgr-category-navigation__list-item');
        for(var i=0; i<categoriNavi.length; i++) {
    
            categoriNavi[i].addEventListener("mouseover",function(){
                var categoriMenu = this.querySelector('.js-ncgr-category-menu-'+this.dataset.category);
                categoriMenu .classList.add('ncgr-is-visible');
            });
    
            categoriNavi[i].addEventListener("mouseout",function(){
                var categoriMenu = this.querySelector('.js-ncgr-category-menu-'+this.dataset.category);
                categoriMenu.classList.remove('ncgr-is-visible');
            });
        }
})();
    
    
    