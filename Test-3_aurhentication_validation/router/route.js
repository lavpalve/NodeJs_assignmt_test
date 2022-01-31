const route = express.Router();
const validateMiddleware = require('../middleware/validateUser');
const userRegController = require('../controller/userRegistor');
const userLoginController = require('../controller/userLogin');
// Defult request
route.get('/', (req, res)=>{
    res.send("You need to registor first");
});

// User register request
route.post('/register', (req, res)=>{
    //console.log(req.body);
    const response = validateMiddleware(req.body);
    if(!response.error){
        // if validation done, save data in database
       const response = userRegController(req.body);
       //console.log(response);
    }else{
        throw response.error;
    }
});

// User Login request
route.post('/login', async(req, res)=>{
    response = await userLoginController(req.body, res);
});

module.exports = route;