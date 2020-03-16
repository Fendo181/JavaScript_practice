'use strict';

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  // iが4になったらbreakして処理が終了する
  if (i === 4) {
    break;
  }
  console.log(i);
}
