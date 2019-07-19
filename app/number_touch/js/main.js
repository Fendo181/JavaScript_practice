'use strict';

{
  //  Panelクラス
  class Panel {
    constructor () {
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
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }

    // currentNum と押し込んだパネルの数値が合っているか比較する
    check() {
      if(currentNum === parseInt(this.el.textContent, 10)){
        // 正解
        this.el.classList.add('pressed');
        currentNum++;

        // 4つ全てのボタンを押されたら、タイマーを止める
        if(currentNum === 4) {
          clearTimeout(timeoutId);
        }
      } 
    }
  }
  // Boardクラス
  class Board {
    constructor () {
      this.panels = [];
      for (let i = 0; i < 4; i++) {
        this.panels.push(new Panel());
      }
      this.setup();
    }

    // パネルの数だけ要素を追加する
    setup() {
        const board = document.getElementById('board');
        this.panels.forEach(panel => {
            //  クラスのプロパティに外部から直接アクセスしないほうが良い
            // board.appendChild(panel.el);
            // getterを使って取得する
            board.appendChild(panel.getEl()); //カプセル化
        });
    }

    // ゲーム開始処理
    activate() {
      const nums = [0,1,2,3];
      this.panels.forEach(panel => {
        const num = nums.splice(Math.floor(Math.random()*nums.length),1)[0];
        panel.activate(num);
      });
    }
  }

  function runTimer() {
    const timer = document.getElementById('timer');
    timer.textContent = ((Date.now() - startTime)/1000).toFixed(2);

    // runTimerを再帰的に呼びだす
    timeoutId =  setTimeout(()=>{
      runTimer();
    },10);
  }

  const board = new Board();

  // 今押している数字を保持しておく
  let currentNum;
  // 時刻のデータを保持する
  let startTime;
  let timeoutId;


  const btn = document.getElementById('button');
  btn.addEventListener('click',()=>{
    /// 既にタイマーが走っていたら、それを止める
    if(typeof timeoutId !== 'undefined') {
      clearTimeout(timeoutId);
    }
    currentNum = 0;
    // ゲーム開始
    board.activate();
    // 時間測定開始
    startTime = Date.now();
    runTimer();
  });
}
