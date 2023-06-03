import {combineReducers}from "redux"

import {
    RESET_STORE_SUCCESS,
    RESET_STORE_FAILURE
} from "../actions/Types";

// reducers
import {login} from "./Auth";
import {loading} from "./Common";
import {getTextContent} from "./Text"
import {checkLoggedIn} from "./checkLogin"



const appReducer = combineReducers({
    login,
    loading,
    getTextContent,
    checkLoggedIn  
})

  export default (state, action) => {
    if (action.type === RESET_STORE_SUCCESS) {
      state = undefined;
    }
  
  
    return appReducer(state, action);
}
