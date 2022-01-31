const Connection = require("mysql/lib/Connection");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const authenticateUser = (loginCreditional, res)=>{
    conn.connect((err)=>{
        if(!err){
            //console.log(loginCreditional);
            var saltRounds = 10;
            // Insert data into database
            let sql = `SELECT * FROM userprofile WHERE username = '${loginCreditional.username}'`;
            conn.query(sql, (err, data)=>{
                if(err){
                    throw err;
                }else{
                    //console.log(data[0].password);
                    bcrypt.compare(loginCreditional.password, data[0].password, async(err, result)=>{
                        //console.log(result);
                        if(result){
                            console.log('login succesfully');
                            var token = await jwt.sign({loginCreditional}, '12122');
                            res.setHeader('token', token);
                        }else{
                            console.log('Your password is incorrect');
                        }
                    });
                }
            });
        }else{
            throw err;
        }
    });
}

module.exports = authenticateUser;