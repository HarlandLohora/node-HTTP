const http = require('http');

const serve = http.createServer(( req, res )=>{
  console.log(req.url);
  if( req.url === '/'){
    res.writeHead(200,{ 'content-type': 'html'});
    res.write('<h1>Harland Lohora - Home</h1>');
    res.end();
  }else if( req.url === '/contact'){
    res.writeHead(200,{ 'content-type': 'html'});
    res.write('<h1>Contact</h1>');
    res.end();
  }else{
    res.writeHead(404,{ 'content-type': 'html'});
    res.write('<h1>404 Not Found!</h1>');
    res.end();
  }

});

serve.listen(3000, () => {
  console.log('Successfully connection!');
});
