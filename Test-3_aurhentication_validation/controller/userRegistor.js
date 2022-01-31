const mysql = require('mysql');
const bcrypt = require('bcrypt');

global.conn = mysql.createConnection({
    host: "127.0.0.1",
    port: "8000",
    user: "root",
    password: "password",
    database: "userauthentication"

});

const userRegisterQuery = (userData)=>{
    conn.connect((err)=>{
        if(!err){
            console.log("connect to db");
            var saltRounds = 10;
            // Insert data into database
            bcrypt.hash(userData.password, saltRounds, function(err, hash) {
                // Store hash in your password DB.
                console.log(hash);
                let sql = `INSERT INTO userprofile (username, password, email, phone) VALUES ('${userData.username}', '${hash}', '${userData.email}', '${userData.phone}')`;
                conn.query(sql, (err)=>{
                    if(err){
                        throw err;
                    }else{
                        console.log('user data inserted in database.');
                        return 'You are registerd succesfully.'
                    }
                });
            });
        }else{
            console.log('connectError: ',err);
        }
    })
}

module.exports = userRegisterQuery;
