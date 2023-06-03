import {
    IS_LOADING_START,
    IS_LOADING_STOP,   
    GET_TEXT_FAILURE,
    GET_TEXT_SUCCESS ,
    GET_ALL_APP_TEXT_SUCCESS,
    GET_ALL_APP_TEXT_FAIELD
} from "./Types";


// notify
import { notify } from "../../components/common/Toaster";

// login api service function
import {_getAllGlobalText} from "../../config/api/Api";


// action for login
export const getAllGlobalText = req => dispatch => {
    try {         
        dispatch({ type: IS_LOADING_START })
        _getAllGlobalText()
            .then(resp => {  
                let payload = {}    
                if(resp.status)
                   payload.allText = resp.data              
                dispatch({ type: GET_ALL_APP_TEXT_SUCCESS, payload })
                dispatch({ type: IS_LOADING_STOP })
            }).catch(err => {
             dispatch({ type: IS_LOADING_STOP })   
            })

    } catch (error) { }

}



