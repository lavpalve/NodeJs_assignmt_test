global.express = require('express');
const app = express();
const router = require('./router/route');

app.use(express.json());
app.use('/', router);

app.listen(3001, ()=>{
    console.log("The server listen on port 3001");
});

