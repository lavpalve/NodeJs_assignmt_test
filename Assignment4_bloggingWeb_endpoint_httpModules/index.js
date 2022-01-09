
const http = require('http');

const server = http.createServer((req, res)=>{
    //console.log(req.url);
    if(req.url == '/allPosts'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('All Post display here.');
    }else if(req.url == '/categoryName.'){
        res.end('All posts display according categoryName');
    }else if(req.url == '/authentication'){
        res.end('Here login & signup system.');
    }else if(req.url == '/profile'){
        res.end('Here user shows, managed profile or activity. .');
    }
    else if(req.url == '/createPost'){
        res.end('User create post here.');
    }
});

server.listen(5000, ()=>{
    console.log('The server listen through port 5000');
});