import axios from "axios";
/*  const  url = 'https://reqres.in';  */
/*  const url = 'http://192.168.1.5/project/api-database';  */  //หน่วย
   const url = 'http://th-projet.com/api-database';    // ยอน 
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

// ดึงข้อมูล ช่าง ตามประเภทงาน
const gettechnician = async (e) => {
  const seaUser = await axios.get(`${url}/getTechnician.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      name: e,
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return error;
    });
  return seaUser;
};

// ดึงข้อมูล ช่าง เเต่ละคน
const gettechnicianAddressid = async (e) => {
  const seaUser = await axios.get(`${url}/getTechnicianAddress.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id: e,
    }
  }).then((result) => {

    return result.data[0];
  })
    .catch((error) => {

      return error;
    });
  return seaUser;
};
/* ดึงข้อมูลลูกค้า เเต่ละคน */
const getUserAddressid = async (e) => {

  const getUserID = await axios.get(`${url}/getUserAddress.php`, {
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

      return error;
    });
  
  return getUserID;
};


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

const getAddress_user = async (e) => {
  const seaUser = await axios.get(`${url}/getAddress_user.php`, {
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

const getMessage_user = async (e) => {
  const seaUser = await axios.get(`${url}/getMessage_user.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id:e,
 
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return null;
    });
  return seaUser;
};
const getMessage_user_id = async (id_user,id_tech) => {
  const seaUser = await axios.get(`${url}/getMessage_user_id.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id_user: id_user,
      id_tech: id_tech,
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return null;
    });
  return seaUser;
};

const getMessage_user_groupBy = async (e) => {
  const seaUser = await axios.get(`${url}/getMessage_user_groupBy.php`, {
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


const getMessage_technician = async (e) => {
  const seaUser = await axios.get(`${url}/getMessage_technician.php`, {
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

const getMessage_technician_id = async (id_user,id_tech) => {
  const seaUser = await axios.get(`${url}/getMessage_technician_id.php`, {
    headers: {
      'Content-Type': 'text/javascript;charset=utf-8',
    },
    params: {
      isAdd: true,
      id_user: id_user,
      id_tech: id_tech
    }
  }).then((result) => {

    return result.data;
  })
    .catch((error) => {

      return null;
    });
  return seaUser;
};
const getMessage_technician_groupBy = async (e) => {
  const seaUser = await axios.get(`${url}/getMessage_technician_groupBy.php`, {
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
  formdata.append('phone_number', e[2]);
  formdata.append('email', e[3]);
  formdata.append('addressUser', e[4]);
  formdata.append('subdistrict', e[5]);
  formdata.append('district', e[6]);
  formdata.append('province', e[7]);
  formdata.append('zipcode', e[8]);
  formdata.append('location', JSON.stringify(e[9]));
  formdata.append('technician_1', e[10]);
  formdata.append('technician_2', e[11]);
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
const createAddress_user = async (e) => {

  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('idPhone', e[0]);
  formdata.append('name', e[1]);
  formdata.append('phone_number', e[2]);
  formdata.append('email', e[3]);
  formdata.append('addressUser', e[4]);
  formdata.append('subdistrict', e[5]);
  formdata.append('district', e[6]);
  formdata.append('province', e[7]);
  formdata.append('zipcode', e[8]);
  formdata.append('location', JSON.stringify(e[9]));
  const adduser = await axios.post(`${url}/addAddress_user.php`, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {

    return "success";
  })
    .catch((error) => {

      return error;
    });

  return adduser;
}

const addMessage = async (e) => {

const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('id_user', e[0]);
  formdata.append('id', e[1]);
  formdata.append('message', e[2]);
  formdata.append('status_read', e[3]);
  formdata.append('status_user', e[4]);
  const message = await axios.post(`${url}/addMessage.php`,formdata,{
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {
    return "success";
  })
    .catch((error) => {
      return error;
    });
  return message; 
};

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
  formdata.append('phone_number', e[2]);
  formdata.append('email', e[3]);
  formdata.append('addressUser', e[4]);
  formdata.append('subdistrict', e[5]);
  formdata.append('district', e[6]);
  formdata.append('province', e[7]);
  formdata.append('zipcode', e[8]);
  formdata.append('location', JSON.stringify(e[9]));
  formdata.append('technician_1', e[10]);
  formdata.append('technician_2', e[11]);
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

const updateAddress_user = async (e) => {
  
  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('id', e[0]);
  formdata.append('name', e[1]);
  formdata.append('phone_number', e[2]);
  formdata.append('email', e[3]);
  formdata.append('addressUser', e[4]);
  formdata.append('subdistrict', e[5]);
  formdata.append('district', e[6]);
  formdata.append('province', e[7]);
  formdata.append('zipcode', e[8]);
  formdata.append('location', JSON.stringify(e[9]));
  const upuser = await axios.post(`${url}/updateAddress_user.php`, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    }
  }).then((result) => {

    return "success";
  })
    .catch((error) => {

      return error;
    });
  return upuser;
  
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
 const updateMessage = async (id,value) => {
  const formdata = new FormData();
  formdata.append('isAdd', true);
  formdata.append('id', id);
  formdata.append('status_read', value);
  const upBookBank = await axios.post(`${url}/updateMessage.php`,formdata,{
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
  createAddress_user,
  getAddress_user,
  updateAddress_user,
  gettechnician,
  gettechnicianAddressid,
  getMessage_user,
  getMessage_user_id,
  getMessage_technician,
  getMessage_technician_id,
  addMessage,
  getMessage_user_groupBy,
  getMessage_technician_groupBy,
  updateMessage,
  getUserAddressid
};
