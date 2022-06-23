import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../navbar/home';
import Tradesman from '../tradesman';


const HomeStack = createNativeStackNavigator();

function App() {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen name="Home" component={Home} />
             <HomeStack.Screen name="Tradesman" component={Tradesman} />

        </HomeStack.Navigator>
    );
  }

export default function RouterHome() {
  return (
     <App/>
  );
}