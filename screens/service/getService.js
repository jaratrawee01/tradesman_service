import axios from "axios";

/*  const  url = 'https://reqres.in';  */
const url = 'http://localhost:3003';


const getUser = async () => {
 await axios.get(`${url}/getUsers`).then((result) => {
    // handle success
    console.log("success");
  })
  .catch((error) =>  {
    // handle error
   console.log("error");
  })
/*   return (
    console.log(res)
  ); */


};
const createUser = async (e) => {
    console.log(e);
const cerUser  =  await axios.post(`${url}/create`, {
    name: e[0],
    email: e[1],
    phone: e[2],
    password: e[3],
    password: e[4],
    password: e[5],
  }).then((result) => {
    // handle success
    return "success";

/*     this.props.navigation.navigate("Profile_user") */
  })
  .catch((error) =>  {
    // handle error
      return "error";
  });

  return cerUser;
};


export default {
  getUser,
  createUser

};