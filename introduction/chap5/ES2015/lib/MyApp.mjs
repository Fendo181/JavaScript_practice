const SECRET_VALUE = Symbol();

export default class{

    constructor(secret){
        this.host = 'hoge';
        this.foo = 'foo';
        // プライベートプロパティ
        this['SECRET_VALUE'] = secret;
    }

    // SECRET_VALUEプロパティを使ったメソッド
    checkKeyValue(secret){
        return this['SECRET_VALUE'] === secret;
    }
}
