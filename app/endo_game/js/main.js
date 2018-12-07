// phina.js をグローバル領域に展開
phina.globalize();

// 定数
const ASSETS = {
  image: {
    bg: "http://jsrun.it/assets/a/G/5/Y/aG5YD.png",
    endu: './img/chara.jpg',
  },
};
const SCREEN_WIDTH = 465; // スクリーン幅
const SCREEN_HEIGHT = 465; // スクリーン高さ
const SPEED = 4;

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  // 初期化
  init: function (options) {
    this.superInit(options);
    // 背景色を指定
    // this.backgroundColor = '#444';
    // 背景
    this.bg = Sprite("bg").addChildTo(this);
    this.bg.origin.set(0, 0); // 左上基準に変更

    // // ラベルを生成
    this.label = Label('Endo Game!').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center(-4); // y 座標
    this.label.fill = 'black'; // 塗りつぶし色

    //プレイヤーを生成する
    this.player = Sprite('endu', 100, 140).addChildTo(this);
    this.player.setPosition(400, 400);
    this.player.frameIndex = 0;
  },

  // 更新
  update: function (app) {
    var p = app.pointer;

    if (p.getPointing()) {
      var diff = this.player.x - p.x;
      if (Math.abs(diff) > SPEED) {
        // 右に移動
        if (diff < 0) {
          this.player.x += SPEED;
          this.player.scaleX = -1;
        }
        // 左に移動
        else {
          this.player.x -= SPEED;
          this.player.scaleX = 1;
        }

        // フレームアニメーション
        if (app.frame % 4 === 0) {
          this.player.frameIndex = (this.player.frameIndex === 12) ? 13 : 12;
        }
      }
    } else {
      // 待機
      this.player.frameIndex = 0;
    }
  }
});

//更新処理




// メイン処理
phina.main(function () {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
    width: SCREEN_WIDTH,  // 画面幅
    height: SCREEN_HEIGHT,// 画面高さ
    assets: ASSETS,       // アセット読み込
  });
  app.enableStats();
  // アプリケーション実行
  app.run();
});
