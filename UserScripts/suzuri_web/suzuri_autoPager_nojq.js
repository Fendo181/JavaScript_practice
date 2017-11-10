(function () {
    'user strict';
    
    var SuzuriContentItems = '.ncgr-section.ncgr-section--gray .ncgr-section__inner.ncgr-section__inner--narrow .ncgr-card.ncgr-mar-b-24'; // 取得する要素
    var SuzuriContent = '.ncgr-section__inner.ncgr-section__inner--narrow'; // 取得要素を追加するコンテンツ
    var SuzuriNextLink = '.journal-pagenation .pagination .next a'; // 次のページのリンク
    var SuzuriNextLinkArea = '.journal-pagenation'; // 次のページのリンクの親要素
    let  base_url      ="https://suzuri.jp/";
    
    var loadingFlag = true;
    console.log("Hellow!");
    (window.onload = function() {
        console.log("windows読めてます!");
        (window.onscroll = function() {
            console.log("スクロール開始");
            if(loadingFlag) {
                var winHeight = $(window).height();
                var scrollPos = $(window).scrollTop();
                var linkPos = $(SuzuriNextLink).height();
            }
        });
    });
})();