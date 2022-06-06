import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login';
import Message from '../navbar/message';


const HomeStack = createNativeStackNavigator();

function App() {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen name="Message" component={Message} />
        </HomeStack.Navigator>
    );
  }

export default function RouterMessage() {
  return (
     <App/>
  );
}