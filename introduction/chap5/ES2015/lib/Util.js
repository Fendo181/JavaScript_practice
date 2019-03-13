const Author = 'Fendo181';


export class Member {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // アクセス修飾子はつかない
    getName(){
        return this.lastName + this.firstName;
    }
}
