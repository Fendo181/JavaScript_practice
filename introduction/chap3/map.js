let date  = new Map();
date.set('dog','ワンワん');
date.set('cat','にゃーにゃー');

console.log(date.size);
console.log(date.get('dog'));
console.log(date.has('cat'));

// 全てのキーを取得
for(let key of date.keys()){
    console.log(key);
}

for(let value of date.values()){
    console.log(value);
}


