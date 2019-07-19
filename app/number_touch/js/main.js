'use strict'

{
  class Panel {
    constructor () {
    this.el = document.createElement('li');
    this.el.classList = classList.add('pressed');
    }
  }
  class Board {
    constructor (params) {
      this.panels = [];
      for (let i = 0; i < 4; i++) {
        this.panels.push(new Panel());
      }
    }
  }

  cnst board = new Board;
}
