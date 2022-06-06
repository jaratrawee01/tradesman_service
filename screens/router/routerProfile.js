import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login';
import Profile_user from '../navbar/profile_user';
import Registration from '../registration';

const HomeStack = createNativeStackNavigator();

function App() {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen name="Profile_user" component={Profile_user} />
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