import axios from "axios";

/*  const  url = 'https://reqres.in';  */
const url = 'http://localhost:3003';


const getUser = async () => {

const rse =  await axios.get(`${url}/getUsers`).then((result) => {
    // handle success

   return result.data; 
  })
  .catch((error) =>  {
    // handle error
    return error;
  })
 return rse;

};

const createUser = async (e) => {
const cerUser  =  await axios.post(`${url}/create`, {
    name: e[0],
    email: e[1],
    phone: e[2],
    password: e[3],
    statusUser: e[4],
    statusCkeck: e[5],
  }).then((result) => {
    return "success";
  })
  .catch((error) =>  {
      return "error";
  });
  return cerUser;
};


const createBookBank = async (e) => {
  console.log('e',e);
 const bookBank  =  await axios.post(`${url}/createBookBank`, {
    name: e[0],
    number_bank: e[1],
    bank: e[2],
  }).then((result) => {
    return "success";
  })
  .catch((error) =>  {
      return "error";
  });
  return bookBank; 
};


export default {
  getUser,
  createUser,
  createBookBank,

};