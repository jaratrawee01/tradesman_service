import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Dimensions ,SafeAreaView} from 'react-native';
import  Login  from '../login';
import  Test_icon  from '../test_icon';
import Navbar from '../navbar';
import Registration from '../registration';
import Reset_paeeword from '../reset_password';


export default function App() {
  return (
    <View>
      
     <Login /> 
{/* <Reset_paeeword/> */}
   {/* <Registration/> */}
  {/*   <Test_icon />   */}
   {/*   <Nave />    */}
      
   </View>

  );
}