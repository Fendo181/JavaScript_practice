$(function () {

    var IScontentItem = '.contents';
    var nextlink = ".pager__next";
    var nextLinkarea = "pager";
    var loadingFlag = false;

    $(window).on('load scroll',function () { 

        if(!loadingFlag){
            var winHeight = $(window).height();
            console.log(winHeight)
            var scrollPos = $(window).scrollTop();
            console.log(scrollPos)
            var linkPos   = $(nextlink).height();
            console.log(linkPos)

            if(winHeight + scrollPos > linkPos) {
                loadingFlag = true
                // 次のページのリンク
                var nextPage = $(nextlink).attr('href')
                // $(nextlink).remove();

                // 次のページを取得

                $.ajax({
                    type: "GET",
                    url: "nextPage",
                    dataType: "html",
                }),done(function(date){
                    var nextlink = $(data).find(nextlink)
                    var contentItem = $(data).find(IScontentItem);
                  // コンテンツ要素を追加
                  $(IScontent).append(contentItems);

                // 次のページがある場合はリンクを追加する
                if(nextLink.length > 0) {
                    $(ISlinkarea).append(nextLink);
                    loadingFlag = false; // 次のページがない場合はloadingFlagをtrueにしたままにして、処理を発生しないようにする
                }
                }).fail(function () {
                    alert('ページの取得に失敗しました。');

                });
            }

        }
    });

});