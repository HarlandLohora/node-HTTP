const http = require('http');

const serve = http.createServer(( req, res )=>{
  res.writeHead(404,{ 'content-type': 'text/plain'});
  res.write('<h1>Harland Lohora</h1>');
  res.end();
});

serve.listen(3000);
