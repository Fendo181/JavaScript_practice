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