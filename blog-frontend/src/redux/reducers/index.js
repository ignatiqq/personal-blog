import { combineReducers } from "redux";

import blogReducer from "./blogReducer.js";
import userReducer from "./userReducer.js";
import errorReducer from "./errorsReducer.js";
 
const rootReducer = combineReducers({
    blogReducer,
    userReducer,
    errorReducer
})

export default rootReducer;