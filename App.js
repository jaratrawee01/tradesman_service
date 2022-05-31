import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import  Login  from './screens/login';
import  Test_icon  from './screens/test_icon';
import  Nave  from './screens/navber';
import  Nave2  from './screens/navbr2';

export default function App() {
  return (
    <View>
 {/*  <Login /> */}
  {/*   <Test_icon />   */}
   {/*   <Nave />    */}
         <Nave2 />   
    {/* ส่วนหัว  */}
  { <StatusBar style="auto" /> }
   </View>
  );
}
