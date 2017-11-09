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

    if ((categoriNavi[0].dataset.category) == "fasion") {
      desktopCategoryNavigation(0);
    }else if((categoriNavi[1].dataset.category) == "commodity") {
      desktopCategoryNavigation(1);
    }else if((categoriNavi[2].dataset.category) == "stationery") {
      desktopCategoryNavigation(2);
    }else if((categoriNavi[3].dataset.category) == "bag") {
      desktopCategoryNavigation(3);
    }else if((categoriNavi[4].dataset.category) == "vaby") {
      desktopCategoryNavigation(4);
    }
    function desktopCategoryNavigation(num){
        // mouse over
        categoriNavi[num].addEventListener("mouseover",function(){
        var categoriMenu = document.querySelector('.js-ncgr-category-menu-'+categoriNavi[num].dataset.category);
        categoriMenu .classList.add('ncgr-is-visible');
        });
            
        // mouse out
        categoriNavi[num].addEventListener("mouseout",function(){
        var categoriMenu = document.querySelector('.js-ncgr-category-menu-'+categoriNavi[num].dataset.category);
        categoriMenu.classList.remove('ncgr-is-visible');
        });
    }
})();