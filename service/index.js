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
    console.log("448888");
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            res.send(err);

        } else {
            res.send(result);
        }
    });
});


app.post('/create', (req, res) => {

    console.log(req.body);
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

app.post('/createAddress', (req, res) => {

    console.log(req.body);
    const name = req.body.name;
    const addressUser = req.body.addressUser;
    const subdistrict = req.body.subdistrict;
    const district = req.body.district;
    const province = req.body.province;
    const zipcode = req.body.zipcode;
    const location = req.body.location;
    

  db.query(`INSERT INTO address (id,name,address,subdistrict,district,province,zipcode,location) VALUES (null ,'${name}','${addressUser}','${subdistrict}','${district}','${province}','${zipcode}','${JSON.stringify(location)}')`,
        (err, result) => {
            if (err) {
                res.send(err);

            } else {
                res.send(result);
            }
        });  
});



const multer = require("multer");

const multerConfig = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        const ext = file.mimetype.split('/')[1];
        callBack(null, `image-${Date.now()}.${ext}`);
    },
});

const upload = multer({
    storage: multerConfig
});


app.post("/uplodeImages" ,upload.single('photo'),(req, res) => {


    res.status(200).json({
        success: 'Success'
    })
    if (!req.file) {
        console.log("No file upload");
    } else {

        console.log(req.file.filename)
        var imgsrc = 'http://127.0.0.1:3003/service/public/' + req.file.filename
        var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
    }

});


 

app.listen('3003', () => {
    console.log('server is ren 3003');
})
