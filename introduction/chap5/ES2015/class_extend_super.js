class Member {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // アクセス修飾子はつかない
    getName(){
        return this.lastName + this.firstName;
    }
}

let m = new Member('山田','太郎')
console.log(m.getName()); //太郎山田

// 継承
class BusineeMember extends Member {
    // オーバーライドする
    constructor(firstName,lastName, clazz) {
        super(firstName,lastName);
        this.clazz = clazz;
    }
    getName() {
       return super.getName() + '/役職:' + this.clazz;
    }
}

let bm = new BusineeMember('遠藤','太徳','ソフトウェアエンジニア');
console.log(bm.getName());

// result
// 太郎山田
// 太徳遠藤
// 太徳遠藤働いています

