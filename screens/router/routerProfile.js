import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login';
import Profile_user from '../navbar/profile_user';
import Registration from '../registration';
import Profile_tradesman from '../navbar/profile_tradesman';

const HomeStack = createNativeStackNavigator();

function App() {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen name="Profile_tradesman" component={Profile_tradesman} />
            <HomeStack.Screen name="Login" component={Login} />
            <HomeStack.Screen name="Registration" component={Registration} />
        </HomeStack.Navigator>
    );
  }

export default function RouterProfile() {
  return (
     <App/>
  );
}