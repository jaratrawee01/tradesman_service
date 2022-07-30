import React ,{useEffect,useState}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/navbar/home';
import Login from './screens/login';
import Message from './screens/navbar/message';
import Shop from './screens/navbar/shop';
import Profile_user from './screens/navbar/profile_user';
import RouterHome from './screens/router/routerHome';
import RouterShop from './screens/router/routerShop';
import RouterMessge from './screens/router/routerMessge';
import RouterProfile from './screens/router/routerProfile';
import { createStore } from 'redux';
/* import allReducer from './redux/index'; */
import { Provider } from "react-redux"; 
import  configureStore   from './redux/reducers';
import { PersistGate } from 'redux-persist/integration/react';
import * as Linking from 'expo-linking';


const { store, persistor } = configureStore();
/* const store = createStore(allReducer); */
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={RouterHome}
        options={{
          tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
        }} />
    {/*   <Tab.Screen name="Shop" component={RouterShop}
        options={{
          tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="shopping" color={color} size={size} />)
        }} /> */}
      <Tab.Screen name="message" component={RouterMessge}
        options={{
          tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="message-processing" color={color} size={size} />)
        }} />
      <Tab.Screen name="Profile" component={RouterProfile}
        options={{
          tabBarIcon: ({ size, color }) => (<FontAwesome name="user" color={color} size={size} />)
        }} />

    </Tab.Navigator>
    </NavigationContainer>

  );
}

export default function App() {
 
  const [data, setData] = useState(null);

function handleDeepLink(event) {
  let data = Linking.parse(event.url);
  setData(data);
}

  useEffect(() => {
    Linking.addEventListener("ur", handleDeepLink);
    return() =>{
      Linking.removeEventListener("url");
    }
  },[]) 

  return (
    <>
     <Provider store={store}> 
     <PersistGate  load={null}  persistor={persistor}>
            <MyStack />
      </PersistGate>
      </Provider> 
    </>


  );
} 
