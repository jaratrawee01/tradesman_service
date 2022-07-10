
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createStore, applyMiddleware ,combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



import  {logInReducer}  from  './logInReducer';
import {FriendListReducer}  from  './FriendListReducer';

const  rootPersistConfig= {
    key: 'root',
    storage:AsyncStorage,
    whitelist: ["authReducer", "userReducer"]
    };
  
const rootReducer = combineReducers({
    login: logInReducer,
    url: FriendListReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor }
}
