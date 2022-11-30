const http = require('http');

const serverController = (function (req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write('<h1>Hoola Mundoo</h1>');
    res.end();
})

const server = http.createServer(serverController)

server.listen(3000, function(){
    console.log('The server is running');
});