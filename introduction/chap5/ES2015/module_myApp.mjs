import {MyApp} from './lib/MyApp'

let app = new MyApp('secret string');

for(let key in app) {
    console.log(key);
}

console.log(JSON.stringify(app));
console.log(app.checkKeyValue('secret string'))
