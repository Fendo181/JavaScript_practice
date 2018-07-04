//5行でHTTPサーバを作る
let http = require('http');
let server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hello World');
});
server.listen(3000)
