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
    var SuzuriContentItems = '.ncgr-section __inner ncgr-section--gray'; // 取得する要素
    var SuzuriContent = '.ncgr-card ncgr-mar-b-24'; // 取得要素を追加するコンテンツ
    var SuzuriNextLink = '.journal-pagenation .pagination .next a'; // 次のページのリンク
    var SuzuriNextLinkArea = '.journal-pagenation'; // 次のページのリンクの親要素

    var loadingFlag = false; // 読み込み中はtrueにして、複数回発生しないようにする
    let base_url ="https://suzuri.jp/";

    // スクロール開示に読み込みが発生する。
    $(window).on('load scroll', function() {
        if(!loadingFlag) {
            var winHeight = $(window).height();
            console.log("windowの高さ"+winHeight);
            var scrollPos = $(window).scrollTop();
            console.log("スクロールの位置"+scrollPos);
            var linkPos = $(SuzuriNextLink).height();
            console.log("nextリンクの高さ"+linkPos);

            // より上にある場合は
            if(winHeight + scrollPos > linkPos) {
                loadingFlag = true;
                // 次のページのリンクを取得して、要素を削除しておく
                var nextPage = base_url+$(SuzuriNextLink).attr('href');
               console.log("次のリンクは"+nextPage);
                $(SuzuriNextLink).remove();
                // 次のページの要素を取得
                $.ajax({
                    type: 'GET',
                    url: nextPage,
                    dataType: 'html'
                }).done(function(data) {
                    // 次のページのリンクを取得
                    var nextLink = $(data).find(SuzuriNextLink);
                     console.log(nextLink);
                    // コンテンツ要素を取得
                    var contentItems = $(data).find(SuzuriContentItems);
                    console.log(contentItems);
                    // コンテンツ要素を追加
                    $(SuzuriContent).append(contentItems);
                    // 次のページがある場合はリンクを追加する
                    if(nextLink.length > 0) {
                        $(SuzuriNextLinkArea).append(nextLink);
                        loadingFlag = false; // 次のページがない場合はloadingFlagをtrueにしたままにして、処理を発生しないようにする
                    }
                }).fail(function () {
                    alert('ページの取得に失敗しました。');
                });
            }
        }
    });
});