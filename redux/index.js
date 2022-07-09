import { combineReducers } from 'redux';

import  {logInReducer}  from  './logInReducer';
import {FriendListReducer}  from  './FriendListReducer';

const rootReducer = combineReducers({
    login: logInReducer,
    url: FriendListReducer,
});

export default  rootReducer;