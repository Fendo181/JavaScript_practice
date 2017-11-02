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


$(function() {
    var SuzuriContentItems = '.ncgr-section.ncgr-section--gray .ncgr-section__inner.ncgr-section__inner--narrow .ncgr-card.ncgr-mar-b-24'; // 取得する要素
    var SuzuriContent = '.ncgr-section__inner.ncgr-section__inner--narrow'; // 取得要素を追加するコンテンツ
    var SuzuriNextLink = '.journal-pagenation .pagination .next a'; // 次のページのリンク
    var SuzuriNextLinkArea = '.journal-pagenation'; // 次のページのリンクの親要素

    var loadingFlag = false; // 読み込み中はtrueにして、複数回発生しないようにする
    let  base_url      ="https://suzuri.jp/";

    // スクロール開示に読み込みが発生する。
    $(window).on('load scroll', function() {
        if(!loadingFlag) {
            var winHeight = $(window).height();
            var scrollPos = $(window).scrollTop();
            var linkPos = $(SuzuriNextLink).height();

            if(winHeight + scrollPos > linkPos) {
                loadingFlag = true;
               var nextPage = base_url+$(SuzuriNextLink).attr('href');

                // 次のページのリンクを取得して、要素を削除しておく
               console.log("次のリンクは"+nextPage);
                $(SuzuriNextLinkArea).remove();

                $.ajax({
                    type: 'GET',
                    url: nextPage,
                    dataType: 'html'
                }).done(function(data) {
                     console.log("通信に成功しました！");
                    // コンテンツ要素を取得
                    var contentItems = $(data).find(SuzuriContentItems);  //記事
                    var journal_page =  $(data).find(SuzuriNextLinkArea); //リンクエリア

                    // コンテンツ要素を追加
                    $(SuzuriContent).append(contentItems);
                    $(SuzuriContent).append(journal_page);

                    // 次のページがある場合はリンクを追加する
                    if(journal_page.length) {
                        $(SuzuriContent).append(journal_page);
                        loadingFlag = false; //読み込みが成功したら、loadingFlagをfalsにして再度読み込みを開始させる。　
                    }
                }).fail(function () {
                    console.log("通信に失敗しました！！");
                    alert('ページの取得に失敗しました。');
                });
            }
        }
    });
});