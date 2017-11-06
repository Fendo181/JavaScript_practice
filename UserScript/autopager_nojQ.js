// ==UserScript==
// @name         Suzuri AutoPaging
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       endu
// @match       https://suzuri.jp/surisurikun/journals/
// @grant        none
/* load jQuery */
// @require https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function (){
    'user strict';

    var SuzuriContentItems = '.ncgr-section.ncgr-section--gray .ncgr-section__inner.ncgr-section__inner--narrow .ncgr-card.ncgr-mar-b-24'; // 取得する要素
    var SuzuriContent      = '.ncgr-section__inner.ncgr-section__inner--narrow'; // 取得要素を追加するコンテンツ
    var SuzuriNextLink     = '.journal-pagenation .pagination .next a'; // 次のページのリンク
    var SuzuriNextLinkArea = '.journal-pagenation'; // 次のページのリンクの親要素

    var loadingFlag = true;
    console.log("hello wold!");
    window.onscroll  =  function() {

        if(loadingFlag) {
            var winHeight  = window.innerHeight;
            var scrollPos   = window.scrollY;
            var linkPos      = document.querySelector(".journal-pagenation .pagination .next a").offsetHeight;

            if(winHeight + scrollPos > linkPos) {
                // 読み込み中はfalseにして、複数回発生しないようにする
                loadingFlag = false;

                // 次のページのリンクを取得して、要素を削除しておく
                var nextPage = document.querySelector(".journal-pagenation .pagination .next a").href;
                $(SuzuriNextLinkArea).remove();
                console.log("次のリンクは"+nextPage);

                // fetch
                fetch(nextPage)
                .then(function(response) {
                  console.log('fetch成功!');
                  return response.text();
                }).then(function(body) {
                 console.log('body取得!成功!');

                 var parser = new DOMParser();
                 var doc = parser.parseFromString(body, "text/html");

                console.log(doc) ;

                var contentItems = doc.querySelectorAll(".ncgr-section.ncgr-section--gray .ncgr-section__inner.ncgr-section__inner--narrow .ncgr-card.ncgr-mar-b-24");
                var journal_page = doc.querySelector(".journal-pagenation");
               console.log(journal_page) ;

                  // コンテンツ要素を追加
                $(SuzuriContent).append(contentItems);

                 if(journal_page.matches(".journal-pagenation")) {
                    $(SuzuriContent).append(journal_page);
                    loadingFlag = true; //読み込みが成功したら、loadingFlagをtrueにして再度読み込み判定を開始させる。
                }
                });
            }
        }
    };
})();