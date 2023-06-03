import {
    IS_LOADING_START,
    IS_LOADING_STOP,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    IS_LOGGED_IN,
    IS_LOGGED_OUT
} from "../actions/Types";



const InitalState = {
    isLoading:false
}



// login
export const loading = (state = InitalState, action) => {
    switch (action.type) {
        case IS_LOADING_START:
            return {
                ...state,
                isLoading: true,
            }

        case IS_LOADING_STOP:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }

}