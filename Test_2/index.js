const http = require('http');

const employeeData = require('./employeeData');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    if(req.url == '/getEmployee'){
        res.write(employeeData);
    }else if(req.url == '/getEmployee/Software Engineer'){
        var data = [];
        allEmployeeData.forEach(element => {
            if(element.role == 'Software Engineer'){
                data.push(element);
            }
        });
        //console.log(data);
        res.write(data);
    }else{
        res.write('Hello');
    }
    res.end();
});

server.listen(3030, ()=>{
    console.log('The server listen through 3000 port.');
});