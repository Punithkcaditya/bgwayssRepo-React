import {
   IS_LOGGED_NOT_USER,
   IS_LOGGED_IN_USER

   
} from "../actions/Types";


const initalState = {
    isLoading:true
    
    
}

// login
export const checkLoggedIn = (state = initalState, action) => {
    switch (action.type) {
        case IS_LOGGED_IN_USER:
            return {
              ...state,
              ...action.payload
            }
        default:
            return state
    }

}