import axios from "axios";

/*  const  url = 'https://reqres.in';  */
const url = 'http://192.168.1.5:3003';


const getUser = async () => {

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


const getLogin = async (e) => {
  console.log("e",e[0]);
 /*  const rse = await axios.get(`${url}/getLogin`,{
    uesrname: e[0],

  })
  .then((result) => {
    // handle success

    return result.data;
  })
    .catch((error) => {
      // handle error
      return error;
    })
  return rse; */

};

const createUser = async (e) => {

  const cerUser = await axios.post(`${url}/createUser`, {
    name: e[0],
    email: e[1],
    phone: e[2],
    password: e[3],
    statusUser: e[4],
    statusCkeck: e[5]
  }).then((result) => {

    return "success";
  })
  .catch((error) => {
      return error;
    });

  return cerUser;
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
    name: e[0],
    addressUser: e[1],
    subdistrict: e[2],
    district: e[3],
    province: e[4],
    zipcode: e[5],
    location: e[6],

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

 /*
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
 */
  
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



export default {
  getUser,
  createUser,
  createBookBank,
  createAddress,
  uplodeImages,
};