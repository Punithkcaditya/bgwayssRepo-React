import {
    IS_LOADING_START,
    IS_LOADING_STOP,
    IS_LOGIN_SUCCESS,

   
} from "../actions/Types";


const initalState = {
    isLoggedIn:false
}

// login
export const login = (state = initalState, action) => {
    switch (action.type) {
        case IS_LOGIN_SUCCESS:
            return {
                isLoggedIn: false,
            }       
        default:
            return state
    }

}