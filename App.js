import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Dimensions ,SafeAreaView} from 'react-native';
import  Index  from './screens/home/index';



export default function App() {
  return (
    <SafeAreaView>
      <Index />
   </SafeAreaView>
  );
}
