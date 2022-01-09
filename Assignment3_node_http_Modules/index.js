const blogs = require ('./blogging.js');

console.log(blogs);


const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, 'content: "text/html"');
    res.write(JSON.stringify(blogs));
    res.end();
});
server.listen(5000, '127.0.0.1', ()=>{
    console.log('server listening at the port 5000');
});