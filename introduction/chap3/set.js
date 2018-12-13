let s = new Set();
s.add(10);
s.add(5);
s.add(12);
s.add(5);

console.log(s.size);

// 同じ値は無視する
for(let val of s.values()){
    console.log(val);
}
