var http = require("http");
var fs = require('fs');



var server = http.createServer(function (request, response) {
   console.log('request was make: ' + request.url);
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.writeHead(200, {'Content-Type': 'json/html'});
   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
   myReadStream.pipe(response)
});
server.listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');


