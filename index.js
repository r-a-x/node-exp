var http = require('http');



var initServer = function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end('<h1>pHello Node Developers</h1>');
};

var server = http.createServer(initServer);

server.listen(8081);
