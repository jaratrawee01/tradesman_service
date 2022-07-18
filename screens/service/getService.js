import axios from "axios";
/*  const  url = 'https://reqres.in';  */
const url = 'http://192.168.1.5/project/api-database'; //หน่วย
/*  const url = 'http://192.168.0.108/project/api-database';  */// ยอน 
/* const getUser = async () => {

  const rse = await axios.get(`${url}/getUsers`).then((result) => {
    // handle success
a
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

/**
 * ! ส่วนของ get 
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

      return null;
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

      return null;
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

const getAddress = async (e) => {
  const seaUser = await axios.get(`${url}/getAddress.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id: e,
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return null;
    });
  return seaUser;
};


const getImage = async (e) => {
  const seaUser = await axios.get(`${url}/getImages.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id: e,
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return null;
    });
  return seaUser;
};
const getImageProfile = async (e) => {

  const seaUser = await axios.get(`${url}/getImagesProfile.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id: e,
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return null;
    });
  return seaUser;
};

const getBookBank = async (e) => {
  const bookbank = await axios.get(`${url}/getBank.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id: e,
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return null;
    });
  return bookbank;
};



/**
 * ! ส่วนของ post 
*/ 

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

  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('idPhone', e[0]);
  formdata.append('name', e[1]);
  formdata.append('addressUser', e[2]);
  formdata.append('subdistrict', e[3]);
  formdata.append('district', e[4]);
  formdata.append('province', e[5]);
  formdata.append('zipcode', e[6]);
  formdata.append('location', JSON.stringify(e[7]));
  formdata.append('technician_1', e[8]);
  formdata.append('technician_2', e[9]);
  const cerAdd = await axios.post(`${url}/addAddress.php`, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {

    return "success";
  })
    .catch((error) => {

      return error;
    });
  return cerAdd;
}

const createBookBank = async (e) => {

  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('id_user', e[0]);
  formdata.append('name', e[1]);
  formdata.append('number_bank', e[2]);
  formdata.append('bank', e[3]);
  const bookBank = await axios.post(`${url}/addBank.php`,formdata,{
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {
    return "success";
  })
    .catch((error) => {
      return error;
    });
  return bookBank;
};


const uplodeImages = async (e,id_user) => {
  const formdata = new FormData();
   formdata.append('image', {
     uri: e.uri,
     type: 'image/jpg',
     name: e.uri.split('/').pop(),
   })
   formdata.append('id_user', id_user)
 
   const cerimg = await axios.post(`${url}/saveFile.php`, formdata, {
     headers: {
       'Content-Type': 'multipart/form-data;charset=utf-8',
     }
   }).then((result) => {

     return "success";
   })
     .catch((error) => {

       return error;
     });
   return cerimg;
 };

 const imageProfile = async (e,id_user) => {
  const formdata = new FormData();
   formdata.append('image', {
     uri: e.uri,
     type: 'image/jpg',
     name: e.uri.split('/').pop(),
   })
   formdata.append('id_user', id_user)
 
   const cerimg = await axios.post(`${url}/saveFile_Profile.php`, formdata, {
     headers: {
       'Content-Type': 'multipart/form-data;charset=utf-8',
     }
   }).then((result) => {

     return "success";
   })
     .catch((error) => {

       return error;
     });
   return cerimg;
 };




/* update */
const updateAddress = async (e) => {

  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('id', e[0]);
  formdata.append('name', e[1]);
  formdata.append('addressUser', e[2]);
  formdata.append('subdistrict', e[3]);
  formdata.append('district', e[4]);
  formdata.append('province', e[5]);
  formdata.append('zipcode', e[6]);
  formdata.append('location', JSON.stringify(e[7]));
  formdata.append('technician_1', e[8]);
  formdata.append('technician_2', e[9]);
  const cerAdd = await axios.post(`${url}/updateAddress.php`, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {

    return "success";
  })
    .catch((error) => {

      return error;
    });
  return cerAdd;
  
}

const uplodeUpdateImages = async (e,id,name) => {

  const formdata = new FormData();
   formdata.append('image', {
     uri: e.uri,
     type: 'image/jpg',
     name: e.uri.split('/').pop(),
   })
   formdata.append('id', id)
   formdata.append('name', name)
   const upimg = await axios.post(`${url}/saveUpdateFile.php`, formdata, {
     headers: {
       'Content-Type': 'multipart/form-data;charset=utf-8',
     }
   }).then((result) => {

     return "success";
   })
     .catch((error) => {

       return null;
     });
   return upimg;
 };

 
const uplodeUpdateImagesProfile = async (e,id,name) => {

  const formdata = new FormData();
   formdata.append('image', {
     uri: e.uri,
     type: 'image/jpg',
     name: e.uri.split('/').pop(),
   })
   formdata.append('id', id)
   formdata.append('name', name)
   const upimg_pro = await axios.post(`${url}/saveUpdateFile_Profile.php`, formdata, {
     headers: {
       'Content-Type': 'multipart/form-data;charset=utf-8',
     }
   }).then((result) => {

     return "success";
   })
     .catch((error) => {

       return null;
     });
   return upimg_pro;
 };

 const updateBookBank = async (e) => {

  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('id', e[0]);
  formdata.append('name', e[1]);
  formdata.append('number_bank', e[2]);
  formdata.append('bank', e[3]);
  const upBookBank = await axios.post(`${url}/updateBank.php`,formdata,{
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {
    return "success";
  })
    .catch((error) => {
      return error;
    });
  return upBookBank;
};







export default {
  createUser,
  searchUser,
  getLogin,
  technician_type,
  createAddress,
  getAddress,
  updateAddress,
  uplodeImages,
  getImage,
  uplodeUpdateImages,
  createBookBank,
  getBookBank,
  updateBookBank,
  imageProfile,
  uplodeUpdateImagesProfile,
  getImageProfile,

};