
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware ,combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import  {logInReducer}  from  './logInReducer';
import {urlReducer}  from  './urlReducer';
import {addressReducer}  from  './addressReducer';
import {imagesReducer}  from  './imagesReducer';
import {bookbankReducer}  from  './bookbankReducer';
import {imageProfileReducer}  from  './imageProfileReducer';
import {addressUserReducer} from './addressUserReducer';

const persistConfig = {
  key: "root",    
  storage: AsyncStorage
};



const rootReducer = combineReducers({
    login: logInReducer,
    urlImage: urlReducer,
    address: addressReducer,
    image: imagesReducer,
    imageProfile: imageProfileReducer,
    bookbank:bookbankReducer,
    addressUser:addressUserReducer,

});

 const persistedReducer = persistReducer(persistConfig, rootReducer) 


export default () => {
  let store = createStore(persistedReducer,applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor }
}
