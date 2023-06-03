import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

// root reducer
import RootReducer from "../reducers/Index";

// dev tool
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk)
)

// store 
const store = createStore(RootReducer, composeEnhancers)

export default store;




