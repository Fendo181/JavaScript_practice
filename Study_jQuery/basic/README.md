## jQueryの文法を学んで見る。

### 基本構文

htmlを読み込んでから処理を実行する。

```js
 <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="hogehoge"
    crossorigin="anonymous"></script>
// codeing
<script>
$(function(){

});
</script>
```

### セレクタを選択する。

セレクタ

- idセレクタ
  - `id="hoge"`:`$('#hoge')`
- classセレクタ 
  - `class = "fuga"`: `$('.fuga')`
- 要素セレクタ
  - `<p></p>`:`$('p')`
- 子孫セレクタ
  - `<div><p></p></div>`:`$('div p')`

### 用意されているアクション

- マウスクリック

```js

$(function () {
    $('#push').click(function () { 
        $(this).text("なんか押されんですけど！！");
    });
});
```

- マウスオーバ
 
```js
$(function () {
    $('#hoge').mouseover(function () { 
        $(this).text("");
    });
});
```

- マウスアウト


```js
$(function () {
    $("#hoge").mouseout(function () { 
        $(this).text("マウスアウトしたね");
    });
});
```

### 簡単なスクリプトを書いてみる。

### 無限スクロール(surisuri君のジャーナル)

```js
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
```



#### Bitcoinの値をリアルタイムで取得してくる。


```js
var buf = {};
buf['Bitfinex'] = [[], []];

var ws = new WebSocket('wss://api.bitfinex.com/ws/');
ws.onopen = function() {
    ws.send(JSON.stringify({      // 購読リクエストを送信
        "event": "subscribe",
        "channel": "trades",
        "pair": "BTCUSD"
    }));
};
ws.onmessage = function(msg) {     // メッセージ更新時のコールバック
    var response = JSON.parse(msg.data);
    if (response[1] === 'te') {    // メッセージタイプ 'te' だけを見る
        buf['Bitfinex'][response[5] > 0 ? 0 : 1].push({
            x: response[3] * 1000, // タイムスタンプ（ミリ秒）
            y: response[4]         // 価格（米ドル）
        });
    }
}

var id = 'Bitfinex';
var ctx = document.getElementById(id).getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [],
            label: 'Buy',                     // 買い取引データ
            borderColor: 'rgb(255, 99, 132)', // 線の色
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // 塗りの色
            fill: false,                      // 塗りつぶさない
            lineTension: 0                    // 直線
        }, {
            data: [],
            label: 'Sell',                    // 売り取引データ
            borderColor: 'rgb(54, 162, 235)', // 線の色
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // 塗りの色
            fill: false,                      // 塗りつぶさない
            lineTension: 0                    // 直線
        }]
    },
    options: {
        title: {
            text: 'BTC/USD (' + id + ')', // チャートタイトル
            display: true
        },
        scales: {
            xAxes: [{
                type: 'realtime' // X軸に沿ってスクロール
            }]
        },
        plugins: {
            streaming: {
                duration: 300000, // 300000ミリ秒（5分）のデータを表示
                onRefresh: function(chart) { // データ更新用コールバック
                    Array.prototype.push.apply(
                        chart.data.datasets[0].data, buf[id][0]
                    );            // 買い取引データをチャートに追加
                    Array.prototype.push.apply(
                        chart.data.datasets[1].data, buf[id][1]
                    );            // 売り取引データをチャートに追加
                    buf[id] = [[], []]; // バッファをクリア
                }
            }
        }
    }
});

```


>[Bitcoin のリアルタイムチャートを Chart.js で表示する](http://nagix.hatenablog.com/entry/2017/07/10/081553)

### 参考

- [jQueryってなに？超初心者向け入門講座](https://webkikaku.co.jp/blog/webdesign/jquery_start/)
- [jQuery基礎文法最速マスター](http://blog.webcreativepark.net/2010/02/02-111519.html)