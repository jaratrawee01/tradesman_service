import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";

import reducers from "./reducers";

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ["authReducer", "userReducer"]
}

const persistedReducer = persistReducer(authPersistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { store, persistor }
}