
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware ,combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import  {logInReducer}  from  './logInReducer';
import {FriendListReducer}  from  './FriendListReducer';

const persistConfig = {
  key: "root",    
  storage: AsyncStorage
};



const rootReducer = combineReducers({
    login: logInReducer,
    url: FriendListReducer,
    user: AsyncStorage.setItem('user',"thanet")
});

 const persistedReducer = persistReducer(persistConfig, rootReducer) 


export default () => {
  let store = createStore(persistedReducer,applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor }
}
