import axios from "axios";

/*  const  url = 'https://reqres.in';  */
const url = 'http://192.168.1.6/project/API_database';


/* const getUser = async () => {

  const rse = await axios.get(`${url}/getUsers`).then((result) => {
    // handle success

    return result.data;
  })
    .catch((error) => {
      // handle error
      return error;
    })
  return rse;

};


const createBookBank = async (e) => {

  const bookBank = await axios.post(`${url}/createBookBank`, {
    name: e[0],
    number_bank: e[1],
    bank: e[2],
  }).then((result) => {
    return "success";
  })
    .catch((error) => {
      return error;
    });
  return bookBank;
};

const createAddress = async (e) => {

  const address = await axios.post(`${url}/createAddress`, {

  }).then((result) => {
    return "success";

  })
    .catch((error) => {

      return "error";
    });
  return address;
};


const uplodeImages = async (e) => {

  const formdata = new FormData();
  formdata.append('image', {
    uri: e.uri,
    type: 'image/jpg',
    name: e.uri.split('/').pop(),
  })
  formdata.append('id_user', 'id_user-123456')


  ! การเขียน แปบ fetch data
   fetch(`${url}/uplodeImages`, {
    method: 'POST',
    body: formdata
  })
    .then((response) => response.json())
    .then((response) => {
      console.log('response', response);
    })
    .catch((error) => {
      console.log('error', error);
    });
 
  
const image  =  await axios.post(`${url}/uplodeImages`,formdata, {
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8',
        }
      }) 
      .then((result) => {
        return "success";
     })
     .catch((error) =>  {
      return error;
  
     });
  return image;
};
 */



// ดึง user  WHERE phone  ว่ามีเบอร์ อยู่ใหม
const searchUser = async (e) => {
  const seaUser = await axios.get(`${url}/searchUser.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      phone: e[0],
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return error;
    });
  return seaUser;
};

// ดึงงานช่างทั้งหมด
const technician_type = async () => {
  const seaUser = await axios.get(`${url}/getTechnician_job_type.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return error;
    });
  return seaUser;
}

// เช็ค user/pass login
const getLogin = async (e) => {
  const seaUser = await axios.get(`${url}/login.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      phone: e[0],
      password: e[1],
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return error;
    });
  return seaUser;
};


// สมัครสมาชิก
const createUser = async (e) => {
  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('phone', e[0]);
  formdata.append('password', e[1]);
  formdata.append('status_user', e[2]);
  formdata.append('status_check', e[3]);
  const cerUser = await axios.post(`${url}/addUser.php`, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {

    return "success";
  })
    .catch((error) => {

      return error;
    });
  return cerUser;
};

const createAddress = async (e) => {
console.log("e",e);
  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('idPhone', e[0]);
  formdata.append('name', e[1]);
  formdata.append('addressUser', e[2]);
  formdata.append('subdistrict', e[3]);
  formdata.append('district', e[4]);
  formdata.append('province', e[5]);
  formdata.append('zipcode', e[6]);
  formdata.append('location', e[7]);
  formdata.append('technician_1', e[8]);
  formdata.append('technician_2', e[9]);
  formdata.append('technician_3', e[10]);
  const cerAdd = await axios.post(`${url}/addAddress.php`, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {
    return result.data;
/*     return "success"; */
  })
    .catch((error) => {
  
      return error;
    });
  return cerAdd;
  
}


export default {
  createUser,
  searchUser,
  getLogin,
  technician_type,
  createAddress,

};