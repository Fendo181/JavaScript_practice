$(function() {
    var SuzuriContentItems = '.ncgr-section.ncgr-section--gray .ncgr-section__inner.ncgr-section__inner--narrow .ncgr-card.ncgr-mar-b-24'; // 取得する要素
    var SuzuriContent = '.ncgr-section__inner.ncgr-section__inner--narrow'; // 取得要素を追加するコンテンツ
    var SuzuriNextLink = '.journal-pagenation .pagination .next a'; // 次のページのリンク
    var SuzuriNextLinkArea = '.journal-pagenation'; // 次のページのリンクの親要素
    let  base_url      ="https://suzuri.jp/";
    
    var loadingFlag = true; 

    // スクロール開示に読み込みが発生する。
    $(window).on('load scroll', function() {
        
        if(loadingFlag) {
            var winHeight = $(window).height();
            var scrollPos = $(window).scrollTop();
            var linkPos = $(SuzuriNextLink).height();

            if(winHeight + scrollPos > linkPos) {
                // 読み込み中はfalseにして、複数回発生しないようにする
                loadingFlag = false;

                // 次のページのリンクを取得して、要素を削除しておく
                var nextPage = base_url+$(SuzuriNextLink).attr('href');
                $(SuzuriNextLinkArea).remove();
                console.log("次のリンクは"+nextPage);

                $.ajax({
                    type: 'GET',
                    url: nextPage,
                    dataType: 'html'
                }).done(function(data) {
                     console.log("通信に成功しました！");
                     console.log(data);
                     
                    // コンテンツ要素を取得
                    var contentItems = $(data).find(SuzuriContentItems);  //記事
                    var journal_page =  $(data).find(SuzuriNextLinkArea); //リンクエリア

                    // コンテンツ要素を追加
                    $(SuzuriContent).append(contentItems);

                    // 次のページがある場合はリンクを追加する
                    if(journal_page.length) {
                        $(SuzuriContent).append(journal_page);
                        loadingFlag = true; //読み込みが成功したら、loadingFlagをtrueにして再度読み込み判定を開始させる。
                    }
                }).fail(function () {
                    console.log("通信に失敗しました！！");
                    alert('ページの取得に失敗しました。');
                });
            }
        }
    });
});