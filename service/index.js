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
            res.send(err);

        } else {
            res.send(result);
        }
    });
});


app.post('/create', (req, res) => {

    console.log("aa");
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const statusUser = req.body.statusUser;
    const statusCkeck = req.body.statusCkeck;

  db.query(`INSERT INTO users (id,name,email,phone,password,status_user,status_check) VALUES (null ,'${name}','${email}','${phone}','${password}','${statusUser}','${statusCkeck}')`,
        (err, result) => {
            if (err) {
                res.send(err);

            } else {
                res.send(result);
            }
        });  
});

app.post('/createBookBank', (req, res) => {
    console.log('asdada');
    const name = req.body.name;
    const number_bank = req.body.number_bank;
    const back = req.body.back;
    

  db.query(`INSERT INTO book_bank (id,name,number_bank,bank) VALUES (null ,'${name}','${number_bank}','${back}')`,
        (err, result) => {
            if (err) {
                res.send(err);

            } else {
                res.send(result);
            }
        });  
});


app.listen('3003', () => {
    console.log('server is ren 3003');
})
