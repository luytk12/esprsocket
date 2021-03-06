//dev
//node

function padNumber(num) {
      // helper function
      return ("0000" + num).slice(-3);
}

var url = require('url');
var net = require('net');
var esp = net.connect(9000, '192.168.1.15',
      function () {
            console.log('connected!');
      });

//listen pattern: ?r=#&g=#&b=# on port 8888
//send pattern: D:RRRGGGBBB on port 9000
var http = require('http');
http.createServer(function (req, res) {
      var q = url.parse(req.url, true).query;
      esp.write('D:' + padNumber(q.r) + padNumber(q.g) + padNumber(q.b));
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
}).listen(8888, '0.0.0.0');
