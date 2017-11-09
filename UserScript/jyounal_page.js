// ==UserScript==
// @name        jyounal page
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

      
        // mouse over
        categoriNavi[0].addEventListener("mouseover",function(){
            var categoriNaviFasion = document.querySelector('.js-ncgr-category-menu-fashion');
            categoriNaviFasion.classList.add('ncgr-is-visible');
        });
  
        // mouse out
        categoriNavi[0].addEventListener("mouseout",function(){
            var categoriNaviFasion = document.querySelector('.js-ncgr-category-menu-fashion');
            categoriNaviFasion.classList.remove('ncgr-is-visible');
        });
  })();
  