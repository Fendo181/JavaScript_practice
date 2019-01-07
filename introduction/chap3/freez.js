'use strict';

let pet = {type:'スノーホワイトハムスター', name:'キラ'};

Object.preventExtensions(pet); //☓ add ○ delete ○ edit
Object.seal(pet); //☓ add ☓ delete ○ edit
Object.freeze(pet); //☓ add ☓ delete ☓ edit

// 既存のプロパティ値を変更
pet.name = '山田きら';

// 既存のプロパティを削除
delete pet.type;

// 新規のプロパティを追加する
pet.weight = 42;

console.log(pet);

