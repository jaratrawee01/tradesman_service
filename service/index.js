const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');



app.use(cors());
app.use(express.json());

/* ส่วนของการเพิ่มภาพ */
const multer = require('multer');
const bodyParser = require('body-parser');
app.use(bodyParser.json());




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


app.post('/createUser', (req, res) => {

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
    const bank = req.body.bank;


    db.query(`INSERT INTO book_bank (id,name,number_bank,bank) VALUES (null ,'${name}','${number_bank}','${bank}')`,
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


/* const multer = require("multer");
const multerConfig = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        const ext = file.mimetype.split('/')[1];
        callBack(null, `image-${Date.now()}.${ext}`);
    },
});
const isImage = (req, file, callBack) => {
    if (file.mimetype.startsWith('image')) {
        callBack(null, true);
    } else {
        callBack(new Error('only Image is Allwoed..'))
    }
}
const upload = multer({
    storage: multerConfig,
    //  fileFilter: isImage, 
});
app.post("/uplodeImages", upload.single('photo'), (req, res) => {
    
console.log(req);
    res.status(200).json({
        success: 'Success'
    })
    if (!req.file) {
        console.log("No file upload");
    } else {
        var imgsrc = 'http://192.168.1.5:3003/service/public/' + req.body.photo
        var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
    }  
}); */

/* const multer = require("multer");
const multerConfig = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        const ext = file.mimetype.split('/')[1];
        callBack(null, `image-${Date.now()}.${ext}`);
    },
}); */

/* const upload = multer({
    storage: multerConfig,
    //  fileFilter: isImage, 
}); */


const storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'public/');
    },
    filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
  });
  const isImage = (req, file, callBack) => {
    if (file.mimetype.startsWith('image')) {
        callBack(null, true);
    } else {
        callBack(new Error('only Image is Allwoed..'))
    }
}
  const upload = multer({ storage,isImage });

  app.post('/uplodeImages', upload.single('image'), (req, res) => {
    console.log('file', req.files);
    console.log('body', req.body);
    res.status(200).json({
      message: 'success!',
    });
  });
  



app.listen('3003', () => {
    console.log('server is ren 3003');
})
