import axios from "axios";

/*  const  url = 'https://reqres.in';  */
const url = 'https://cd6c-171-4-250-186.ap.ngrok.io';


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

const uplodeImages = async (image) => {

  const formdata = new FormData();
  formdata.append('image', {
    name: image.uri
  })
  let res = await  fetch(`${url}/uplodeImages`, {
    method: 'POST',
    body: formdata,
    headers: {
      'Content-Type': 'multipart/form-data; ',
    }
  }).then((response) => response.json())
    .then((response) => {
      console.log('response', response);
    })
    .catch((error) => {
      console.log('error', error);
    });
}

/* const uplodeImages = async (e) => {

  console.log("E",e);
  const formdata = new FormData();
  formdata.append('photo', {
    uriI: e.uri,
    type: e.type,
    name: e.uri.split('/').pop(),

  })
  const image =  axios({
    url: `${url}/uplodeImages`,
    method: 'post',
    data: formdata,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Basic YnJva2VyOmJyb2tlcl8xMjM='
    }
  })
    .then(function (response) {
      return response;
      console.log("response :", response);
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
   
    return image;
}; */


export default {
  getUser,
  createUser,
  createBookBank,
  createAddress,
  uplodeImages,
};