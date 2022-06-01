import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Dimensions ,SafeAreaView} from 'react-native';
import  Login  from './screens/login';
import  Test_icon  from './screens/test_icon';
import Navbar from './screens/navbar';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

  <Login />
  {/*   <Test_icon />   */}
   {/*   <Nave />    */}
         <Navbar/>   

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      position: 'relative',
  },
});