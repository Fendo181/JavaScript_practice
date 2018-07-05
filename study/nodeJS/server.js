let http = require('http');
let server = http.createServer();

let setttings = require('./settings');

console.log(setttings);

server.on('request',function(req, res) {
    // onをつけるとイベントを繋げられる
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('hello wold!');
    //
    res.end();
});

server.listen(setttings.port);
console.log('server listin!');

