var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3004;

var app = express();

app.use(function (req, res, next) {
	// body...
	console.log(req.headers);

	res.writeHead(200, {'Content-type': 'text/html'});
	res.end('<h1>Server is created using Express and Http...</h1>');
});

var server = http.createServer(app);

server.listen(port, hostname, function () {
	// body...
	console.log(`Server is running at http://${hostname}:${port}/`);
})