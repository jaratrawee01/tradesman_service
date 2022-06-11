const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "app_tradesman",
});

app.get('/getUsers', (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);

        } else {
            res.send(result);
        }
    });
});


app.post('/create', (req, res) => {
/* 
    console.log(req.body); */
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

db.query(`INSERT INTO users (id,name,email,phone,password,created_at,updated_at) VALUES (null ,'${name}','${email}','${phone}','${password}',null,null)`), //(null ,name,email,phone,password,null,null)
/*      [null ,name,email,phone,password,null,null],  */
    (err,result) => {
        if(err) {
            console.log(err);
        }else{
            console.log(result);
           /*  res.send("Values"); */
        }
    }; 

        
});


app.listen('3003', () => {
    console.log('server is ren 3003');
})
