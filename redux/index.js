import urlReducer from "./url";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    url: urlReducer,

})

export default allReducers;