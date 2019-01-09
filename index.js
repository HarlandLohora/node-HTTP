const http = require('http');
const fs   = require('fs');

const serve = http.createServer(( req, res )=>{
  console.log(req.url);
  if( req.url === '/'){
    res.writeHead(200,{ 'content-type': 'html'});
    // res.write('');
    const homePage = fs.readFileSync('index.html');
    res.write(homePage);
    res.end();
  }else if( req.url === '/contact'){
    res.writeHead(200,{ 'content-type': 'html'});
    const contactPage = fs.readFileSync('contact.html');
    res.write(contactPage);
    res.end();
  }else if( req.url === '/node.png'){
    res.writeHead(200, { 'content-tyoe' : 'image/png'});
    const image = fs.readFileSync('node.png');
    res.write(image);
    res.end();
  }else{
    res.writeHead(404,{ 'content-type': 'html'});
    const notFoundPage = fs.readFileSync('404.html');
    res.write(notFoundPage);
    res.end();
  }

});

serve.listen(3000, () => {
  console.log('Successfully connection!');
});
