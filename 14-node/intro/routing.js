const http = require('http');

http.createServer(function (req, res) {
  console.log(req.url);

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello from <strong>home page</strong>');
  } else if (req.url === '/account' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello from <strong>account page</strong>');
  } else if (req.url === '/info' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Your browser is ' + req.headers['user-agent']);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('Page not found');
  }

}).listen(1337);
