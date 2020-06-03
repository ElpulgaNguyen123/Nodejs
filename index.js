var http = require('http');
var routes = require('./components/routes');
var async = require('./components/async');
var port = 4300;

function index (req, res) {
    res.writeHead(200);
    res.end('Hello, Thế giới!');
}

http.createServer((req, res) => {

    // rút gọn routes khác với index.
    if(req.url in routes) {
        return routes[req.url](req, res);
    }

    async();
    console.log('server is running...');
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);

}).listen(process.env.PORT || port);