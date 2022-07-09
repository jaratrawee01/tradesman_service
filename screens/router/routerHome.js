import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../navbar/home';
import Tradesman from '../tradesman';
import Profile from '../navbar/profile';
import Home_page from '../home_page';


const HomeStack = createNativeStackNavigator();

function App() {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen name="Home" component={Home} />
             <HomeStack.Screen name="Tradesman" component={Tradesman} />
             <HomeStack.Screen name="Profile" component={Profile} />
             <HomeStack.Screen name="Home_page" component={Home_page} />

        </HomeStack.Navigator>
    );
  }

export default function RouterHome() {
  return (
     <App/>
  );
}