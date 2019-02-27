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
    work() {
        return this.getName() + '働いています'
    }
}

let bm = new BusineeMember('遠藤','太徳');
console.log(bm.getName());
console.log(bm.work());

// result
// 太郎山田
// 太徳遠藤
// 太徳遠藤働いています

