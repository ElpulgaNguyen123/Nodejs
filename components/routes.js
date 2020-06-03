var routes = {
    '/': function index(req, res) {
         // báo cho server mọi thứ ok, và dữ liệu nằm ở plain text
        res.writeHead(200);
        res.end('Hello, World!');
    },
    '/foo': function foo(req, res) {
         // báo cho server mọi thứ ok, và dữ liệu nằm ở plain text
        res.writeHead(200);
        res.end('You are now viewing "foo"');
    }
}
module.exports = routes;