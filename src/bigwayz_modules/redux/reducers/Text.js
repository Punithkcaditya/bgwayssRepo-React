import {
    IS_LOADING_START,
    IS_LOADING_STOP,
    GET_TEXT_SUCCESS,
    GET_TEXT_FAILURE,
    GET_ALL_APP_TEXT_SUCCESS,
    GET_ALL_APP_TEXT_FAIELD

   
} from "../actions/Types";


const initalState = {
    isLoggedIn:false,
    allText:''
    
}

// login
export const getTextContent = (state = initalState, action) => {
    switch (action.type) {
        case GET_TEXT_SUCCESS:
            return {
              ...state,
              ...action.payload.textContent
            }
            case GET_ALL_APP_TEXT_SUCCESS:
                return {
                  ...state,
                  allText:action.payload.allText
                }
        default:
            return state
    }

}