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
