import { createStore,combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-async-storage/async-storage';

import  {logInReducer}  from  './logInReducer';
import {FriendListReducer}  from  './FriendListReducer';


const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    blacklist: ['language']
  };

  
const rootReducer = combineReducers({
    login: logInReducer,
    url: FriendListReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}