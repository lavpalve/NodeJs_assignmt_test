const express = require('express');
const http = require('http');
global.express = require('express');
global.app = express();
const middleware = require('./middleware/middleware');
const route = express.Router();
const router = require('./routes/router.js');

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Welcome to home page");
});


route.use('/', router);


app.listen(3001, (error)=>{
    if(error){
        console.log("Server not cretated succcesfully.");
        throw error;
    }
    
    console.log("The server listen through port 3001");
});
