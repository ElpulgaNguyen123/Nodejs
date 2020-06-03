var http = require('http');
var routes = require('./routes');


var port = 3000;
http.createServer((res, req) => {

    if(req.url in routes) {
        return routes[req.url](req, res);
    }

    // báo cho server mọi thứ ok, và dữ liệu nằm ở plain text
    res.writeHead(200, {
        'Content-type' : 'text/plain'
    })
    // viết 1 đoạn cho ra body
    res.write('Hello, World');
    console.log('server is running....');
    // báo cho server rằng tất cả các phản hồi đã được gửi đi
    res.end()
    
}).listen(process.env.PORT || port);