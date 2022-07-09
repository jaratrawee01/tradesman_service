import axios from "axios";

/*  const  url = 'https://reqres.in';  */
const url = 'http://192.168.1.5/project/API_database';


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

/*
!api PHP  
?isAdd=true&phone=${e[0]}
*/

const searchUser = async (e) => {
   const seaUser = await axios.get(`${url}/searchUser.php`,{
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



const createUser = async (e) => {

      const formdata = new FormData();
      formdata.append('isAdd', true);
      formdata.append('phone', e[0]);
      formdata.append('password', e[1]);
      formdata.append('status_user', e[2]);
      formdata.append('status_check', e[3]);
   const cerUser = await axios.post(`${url}/addUser.php`, formdata,{
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


export default {
  createUser,
  searchUser,

};