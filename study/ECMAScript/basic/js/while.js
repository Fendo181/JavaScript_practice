'use strict';

let hp = 100;

while (hp >= 0) {
  console.log(`${hp} HP Left!`);
  hp -= 15;
}

let hp2 = -50;

do {
  console.log(`${hp2} HP Left!`);
  hp2 -= 15;
} while (hp2 > 0);
