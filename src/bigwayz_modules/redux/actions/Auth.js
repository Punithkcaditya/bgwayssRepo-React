import {
    IS_LOADING_START,
    IS_LOADING_STOP,
    IS_LOGIN_FAIELD,
    IS_LOGIN_SUCCESS,
    IS_LOGGED_IN_USER,
    IS_LOGGED_NOT_USER
} from "./Types";


// notify
import { notify } from "../../components/common/Toaster";

// login api service function
import { _login, _checkLogin, _saveLanguage } from "../../config/api/Api";

import { history } from "../../../App"


// action for login
export const login = req => dispatch => {
    try {
        dispatch({ type: IS_LOADING_START })
        _login(req)
            .then(resp => {
                let payload = {
                    isLogin: "true",
                    auth_token: resp.data.auth_token
                }

                localStorage.setItem("isLoggedIn", "true")
                localStorage.setItem("accessToken", resp.data.auth_token)

                dispatch({ type: IS_LOGIN_SUCCESS, payload })
                dispatch({ type: IS_LOADING_STOP })

                notify("success", "login successfully")
                // history.push("dashboard")

            }).catch(err => {
                dispatch({ type: IS_LOADING_STOP })
                notify("err", "Invalid username/password")



            })

    } catch (error) {
        // notify("err", error.message)

    }

}


// action for login check
export const loginCheck = req => dispatch => {
    try {
        dispatch({ type: IS_LOADING_START })
        _checkLogin(req)
            .then(resp => {
              
                if (resp.success) {
                    if (resp.data.customer_language_id == null) {
                        _saveLanguage({ id: 1 })
                    }
                }

                dispatch({ type: IS_LOGGED_IN_USER, payload: { ...resp.data, isLoading: false } })
                dispatch({ type: IS_LOADING_STOP })

            }).catch(err => {
                dispatch({ type: IS_LOGGED_NOT_USER })
                dispatch({ type: IS_LOADING_STOP })
                // localStorage.clear()
                // history.push("/")             
                // notify("err", "Invalid username/password")



            })

    } catch (error) {
        // notify("err", error.message)

    }

}




