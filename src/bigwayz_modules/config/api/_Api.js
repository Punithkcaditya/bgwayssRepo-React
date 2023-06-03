/**
 * @about auth api file that contains login function
 * that get data from servers
 */

import axios from "axios";
import { history } from "../../../App";

import siteSetting from '../env/index';
const url = siteSetting.api.url;


const authKey = "Basic ZHJhd0JyaWRnZV9hZG1pbjphZG1pbg=="


//login 
export const _Api = (methodType, endPoint, request = '', query = '') => {

    try {
        return new Promise((resolve, reject) => {
            let Cmp_Url = `${url}${endPoint}`

            axios({
                method: methodType,
                url: `${Cmp_Url}${query}`,
                data: request,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${localStorage.getItem("accessToken")}`
                }
            }).then(resp => {
                if (resp.data.statusCode)
                    resolve(resp.data)
                else {
                    if (resp.data.error && resp.data.error.errorCode == 2 || (resp.data.error && resp.data.error.errorCode == 17)) {
                        localStorage.clear()
                        history.push("/")
                    }
                    reject(resp.data)


                }

            }).catch(err => {
                reject(err)
            }

            )
        })

    }
    catch (err) {

    }
}

