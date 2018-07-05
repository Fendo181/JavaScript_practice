let http = require('http');
let server = http.createServer();

server.on('request',function(req, res) {
    // onをつけるとイベントを繋げられる
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('hello wold!');
    //
    res.end();
});

server.listen(3000);
console.log('server listin!');

