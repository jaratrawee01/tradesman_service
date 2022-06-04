import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Dimensions ,SafeAreaView} from 'react-native';
import  Login  from '../login';
import  Test_icon  from '../test_icon';
import Navbar from '../navbar';
import Registration from '../registration';
import Reset_paeeword from '../reset_password';
import Profile_tradesman from '../profile_tradesman';
import Profile_user from '../profile_user';
import Service_form from '../service_form'


export default function App() {
  return (
    <View>
      
     {/* <Login />  */}
     <Service_form/>
{/* <Profile_tradesman/> */}
  {/* <Profile_user/> */}
{/* <Reset_paeeword/> */}
  {/*  <Registration/> */}
  {/*   <Test_icon />   */}
   {/*   <Nave />    */}
      
   </View>

  );
}