import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/navbar/home';
import Message from './screens/navbar/message';
import Shop from './screens/navbar/shop';
import Profile_user from './screens/navbar/profile_user';
import Login from './screens/login';
import Profile_tradesman from './screens/navbar/profile_tradesman';
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
         options={{
          tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
      }}/>
        <Tab.Screen name="Shop" component={Shop} 
          options={{
            tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name="shopping" color={color} size={size} />)
        }}/>
         <Tab.Screen name="message-processing" component={Message} 
          options={{
            tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name="message-processing" color={color} size={size} />)
        }}/>
         <Tab.Screen name="user" component={Profile_user} 
          options={{
            tabBarIcon: ({size, color}) => (<FontAwesome name="user" color={color} size={size} />)
        }}/>
      </Tab.Navigator>

  );
}

export default function App() {

  return (
    <NavigationContainer>
          <MyStack />
    </NavigationContainer>
  );
} 