import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Dimensions ,SafeAreaView} from 'react-native';
import  Login  from '../login';
import  Test_icon  from '../test_icon';
import Navbar from '../navbar';


export default function App() {
  return (
    <View>

        <Login /> 
  {/*   <Test_icon />   */}
   {/*   <Nave />    */}
         <Navbar/>   

   </View>

  );
}