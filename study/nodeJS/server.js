let http = require('http');
let server = http.createServer();

let setttings = require('./settings');

console.log(setttings);
let msg;

server.on('request',function(req, res) {
    switch(req.url) {
        case '/about':
            msg = "about this pages";
            break;
        case '/profile':
            msg = 'about me';
            break;
        default:
            msg = 'wrong page!'
            break;
    }
    // onをつけるとイベントを繋げられる
    res.writeHead(200,{'Content-Type': 'text/plain'});

    res.write(msg);
    res.end();
});

server.listen(setttings.port);
console.log('server listin!');

