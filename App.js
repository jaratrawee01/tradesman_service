import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import  Login  from './screens/login';
import  Test_icon  from './screens/test_icon';

export default function App() {
  return (
    <View>
  <Login />
  {/*   <Test_icon />   */}
    {/* ส่วนหัว  */}
  { <StatusBar style="auto" /> }
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems:'center',
    justifyContent: 'center',
  }
});
