import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../navbar/home';
import Tradesman from '../tradesman';
import Profile from '../navbar/profile';
import profile_tras_user from '../navbar/profile_tras_user';
import Login from '../login';



const HomeStack = createNativeStackNavigator();

function App() {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen name="Home" component={Home} />
             <HomeStack.Screen name="Tradesman" component={Tradesman} />
             <HomeStack.Screen name="Profile" component={Profile} />
             <HomeStack.Screen name="Profile_tras_user" component={profile_tras_user} />
             <HomeStack.Screen name="Login" component={Login} />
        </HomeStack.Navigator>
    );
  }

export default function RouterHome() {
  return (
     <App/>
  );
}