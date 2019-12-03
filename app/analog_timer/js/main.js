'use strict';

{
  class Clock {
    constructor () {
      // 半径
      this.r = 100;
    }

    drawFace () {
      const canvas = document.querySelector('canvas');
      if (typeof canvas.getContext === 'undefined') {
        return 0;
      }

      const ctx = canvas.getContext('2d');
      // 横幅
      const width = canvas.width;
      // 高さ
      const height = canvas.height;

      // 盤面作成
      for (let angle = 0; angle < 360; angle += 6) {
        // 次のループに映る度に座標空間を戻したいのでsaveとrestoreで囲む
        ctx.save();
        // 盤面の中心を真ん中にする
        ctx.translate(width / 2, height / 2);
        // angle をラジアンに変換しつつ rotate させて回す
        ctx.rotate(2 * Math.PI / 360 * angle);

        // 線の描画(60個点を盤面に合わせて描画する)
        ctx.beginPath();
        ctx.moveTo(0, -this.r);
        if (angle % 30 === 0) {
          // 文字を太くする
          ctx.lineWidth = 2;
          ctx.lineTo(0, -this.r + 10);
          // フォントと位置合わせ
          ctx.font = '13px arial';
          // 半径から25下がったところに数字を描画する
          // 0のところは ||演算子で12が入るようにする
          ctx.fillText(angle / 30.0 || 12, 0, -this.r + 25);
        } else {
        // 5px分真下に引く
          ctx.lineTo(0, -this.r + 5);
        }

        // 線を描画する
        ctx.stroke();
        ctx.restore();
      }
    }
    run () {
      this.drawFace();
    }
  }

  const clock = new Clock();
  clock.run();
}
