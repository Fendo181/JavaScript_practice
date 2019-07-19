'use strict';

{
  //  Panelクラス
  class Panel {
    constructor () {
    this.el = document.createElement('li');
    this.el.classList.add('pressed');
    }

    getEl() {
        return this.el;
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
  }

  const board = new Board();
}
