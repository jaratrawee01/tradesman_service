import axios from "axios";

/*  const  url = 'https://reqres.in';  */
const url = 'http://localhost:3003';


const getUser = async () => {

  const res = await axios.get(`${url}/getUsers`).then((response) => {
    return response.data;
  })
  return (
    console.log(res)
  );
};
const createUser = async (e) => {
  /*   console.log(e[0],e[1],e[2],e[3]); */
  await axios.post(`${url}/create`, {
    name: e[0],
    email: e[1],
    phone: e[2],
    password: e[3],
  })
  .then(function (response){
    console.log(response);
  })
  .catch(function (error) {
    console.log('error');
  }); 
};


export default {
  getUser,
  createUser

};