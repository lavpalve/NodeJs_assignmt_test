const express = require('express');
const app = express();

const mysql = require('mysql');

const route = require('./route/index');

app.use(express.json());

var conn = mysql.createConnection({
    url: '127.0.0.1',
    port: '8000',
    user: 'root',
    password: 'password',
    database: 'employee'
});

conn.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('connected with database!');
    }
});

app.listen(3000, ()=>{
    console.log("the server listen through port 3000.");
});

// default page
app.get('/', (req, res)=>{
    res.send('CURD operation with mysql database.');
});

// to fetch all employee data (SELECT)
app.get('/employee', (req, res)=>{
    conn.query("SELECT * FROM personalinfo", (err, data)=>{
        if(err){
            throw err;
        }else{
            console.log("All employee data show succesfully");
            res.send(data);

        }
    });
});

// add employee data (INSERT)
app.post('/employee/add', (req, res)=>{
    let inputData = req.body;
    let sql = `INSERT INTO personalInfo (id, fName, lName, age, department, salary) VALUES
    ('${inputData.id}', '${inputData.fName}', '${inputData.lName}', '${inputData.age}', '${inputData.department}', '${inputData.salary}')`;
    conn.query(sql, (err, result)=>{
        if(err){
            throw error;
        }else{
            console.log("1 record inserted");
        }
    });
});

// update employee data (UPDATE)
app.put('/employee/:id', (req, res)=>{
    let emplyeeId = req.params.id;
    let salary = req.body.salary;
    let sql = `UPDATE personalInfo SET salary = ${salary}`;
    conn.query(sql, (err,result)=>{
        if(err){
            throw err;
        }else{
            console.log("Employee info updated succesfully!");
        }
    });
});

// remove employee (delete)
app.delete('/employee/delete/:id', (req, res)=>{
    let employeeId = req.params.id;
    let sql = `DELETE FROM personalInfo WHERE id = '${employeeId}'`;
    conn.query(sql, (err)=>{
        if(err){
            throw err;
        }else{
            console.log(`employee id '${employeeId}' data remove succesfully`);
        }
    });
});

// route 
//app.use('/employee', route);