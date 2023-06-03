/**
 * @about auth api file 
 * that get data from servers
 */

import axios from "axios";



const GET_COUNTRY_LIST = 'https://webapi.bigwayz.com/api/country/?='
const GET_STATE_LIST = 'https://webapi.bigwayz.com/api/state/'
const GET_CITY_LIST = 'https://webapi.bigwayz.com/api/city/'
const PIN_CODE_SEARCH = 'https://webapi.bigwayz.com/api/city/'
const businessType = 'https://webapi.bigwayz.com/api/mobile/business-type/';
const occupationType = 'https://webapi.bigwayz.com/api/mobile/occupation-type/'
const MY_TREE_URL = 'https://bgadmin.bigwayz.com/api/cajaxtree/'




// list country 
export const _getCountryList = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: GET_COUNTRY_LIST,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            reject(err)


        })
    })

}

// list state 
export const _getStateList = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: GET_STATE_LIST,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            reject(err)


        })
    })

}// list city 
export const _getCityList = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: `${GET_CITY_LIST}`,
            data:request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            reject(err)


        })
    })

}


// PinCodeSearch 
export const _getPinCodeSearch = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: GET_CITY_LIST,
            data:request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            reject(err)


        })
    })


}



// businessType 
export const _businessType = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: businessType,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
           
            reject(err)


        })
    })

}



// businessType 
export const _occupationType = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: occupationType,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
           
            reject(err)


        })
    })

}

// myTree 
export const _getMyTree = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: MY_TREE_URL + `?id=${request.id}`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data.result)
        }).catch(err => {
            reject(err)
        })
    })

}
