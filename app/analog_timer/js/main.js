'use strict';

{
  class Clock {
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
    }
    run () {
      this.drawFace();
    }
  }

  const clock = new Clock();
  clock.run();
}
