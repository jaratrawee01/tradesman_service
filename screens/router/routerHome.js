import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../navbar/home';
import Tradesman from '../tradesman';
import Profile from '../navbar/profile';



const HomeStack = createNativeStackNavigator();

function App() {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen name="Home" component={Home} />
             <HomeStack.Screen name="Tradesman" component={Tradesman} />
             <HomeStack.Screen name="Profile" component={Profile} />
        </HomeStack.Navigator>
    );
  }

export default function RouterHome() {
  return (
     <App/>
  );
}