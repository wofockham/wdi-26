const http = require('http'); // Standard node.js library

http.createServer(function (req, res) { // request, response
  console.log('Serving a request', req);
  res.writeHeader(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from a Node.js Server\n');
}).listen(1337); // LEET

console.log('server running at http://localhost:1337/');
