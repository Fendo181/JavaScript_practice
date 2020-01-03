'use strict';

{
  // Panelクラス
  class Panel {
    constructor (game) {
      this.game = game;
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
      this.el.addEventListener('click', ()=>{
        // 押した数字が順番通りか確認する
        this.check();
      });
    }

    getEl() {
        return this.el;
    }

    activate(num) {
      this.el.classList.remove('number-first');
      if(num == 0) {
        this.el.classList.add('number-first');
        this.el.textContent = num;
      }
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }

    // currentNum と押し込んだパネルの数値が合っているか比較する
    check() {
      if(this.game.getCurrentNum() === parseInt(this.el.textContent, 10)){
        // 正解
        if(this.game.getCurrentNum() == 0) {
          this.el.classList.remove('number-first');
        }
        this.el.classList.add('pressed');
        this.game.addCurrentNum();

        if(this.game.getCurrentNum() === this.game.getLevel() ** 2) {
          clearTimeout(this.game.getTimeoutId());
        }
      } 
    }
  }
  // Boardクラス
  class Board {
    constructor (game) {
      this.game = game;
      this.panels = [];
      for (let i = 0; i < this.game.getLevel() ** 2; i++) {
        this.panels.push(new Panel(this.game));
      }
      this.setup();
    }

    // パネルの数だけ要素を追加する
    setup() {
        const board = document.getElementById('board');
        while (board.firstChild) board.removeChild(board.firstChild);
        this.panels.forEach(panel => {
            //  クラスのプロパティに外部から直接アクセスしないほうが良い
            // board.appendChild(panel.el);
            // getterを使って取得する
            board.appendChild(panel.getEl()); //カプセル化
        });
    }

    // ゲーム開始処理
    activate() {
      const nums = [];
      for (let i = 0; i < this.game.getLevel() ** 2; i++) {
        nums.push(i);
      }

      this.panels.forEach(panel => {
        const num = nums.splice(Math.floor(Math.random()*nums.length),1)[0];
        panel.activate(num);
      });
    }
  }

  class Game {
    constructor(level) {

      // gameに難易度を管理する
      this.level = level;
      // gameクラスのインスタンスを渡す
      this.board = new Board(this);

      // 今押している数字を保持しておく
      this.currentNum = undefined;
      // 時刻のデータを保持する
      this.startTime = undefined;
      this.timeoutId = undefined;
      this.start();
      this.setup();
    }

    setup() {
      const container = document.getElementById('container');
      const PANEL_WIDTH = 50;
      const BOARD_PADDING = 10;
      /* 50px * 2 10px *2 */
      container.style.width = PANEL_WIDTH * this.level + BOARD_PADDING * 2  + 'px';
    }

    start() {
      const btn = document.getElementById('button');
      btn.addEventListener('click',()=>{
        /// 既にタイマーが走っていたら、それを止める
        if(typeof this.timeoutId !== 'undefined') {
          clearTimeout(this.timeoutId);
        }
       this.currentNum = 0;

        // ゲーム開始
        this.board.activate();
        // 時間測定開始
        this.startTime = Date.now();
        this.runTimer();
      });
    }

    runTimer() {
      const timer = document.getElementById('timer');
      timer.textContent = ((Date.now() - this.startTime)/1000).toFixed(2);
  
      // runTimerを再帰的に呼びだす
      this.timeoutId =  setTimeout(()=>{
        this.runTimer();
      },10);
    }

    getCurrentNum() {
      return this.currentNum;
    }

    getTimeoutId() {
      return this.timeoutId;
    }

    addCurrentNum() {
      this.currentNum++;
    }

    getLevel() {
      return this.level;
    }
  }

  document.getElementById('difficult_level').addEventListener('change',()=>{
    let index = document.getElementById('difficult_level').selectedIndex;
    let level = document.getElementById('difficult_level').options[index].value;
    switch (level){
      case 'easy' :
       new Game(3);
       break;
       case 'normal' :
        new Game(6);
        break;
      case 'hard' :
       new Game(8);
       break;
      case 'endo' :
      new Game(10);
       break;
      default:
       new Game(2);
    }
  });

  new Game(3)
}
