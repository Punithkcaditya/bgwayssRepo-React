
/**
 * @about auth api file 
 * that get data from servers
 */

import axios from "axios";
import { history } from "../../../App"

const loginUrl = 'https://webapi.bigwayz.com/api/auth/frontend/token/login/'
const chkLogin = 'https://webapi.bigwayz.com/api/web/login-check/'
const signUpUrl = 'https://webapi.bigwayz.com/api/frontend/user-registration/'
const otpVerifyUrl = 'https://webapi.bigwayz.com/api/frontend/verify-otp/'
const sendOtpUrl = 'https://webapi.bigwayz.com/api/frontend/send-otp/'
const basicDetailsUrl = 'https://webapi.bigwayz.com/api/frontend/user-basic-details/'
const userBusinessDetails = 'https://webapi.bigwayz.com/api/frontend/user-business-details/'
const bankAccountDetails = 'https://webapi.bigwayz.com/api/web/bank/'
const businessInformation = 'https://webapi.bigwayz.com/api/mobile/business-categorie/'
const subBusinessInfo = 'https://webapi.bigwayz.com/api/mobile/business-categorie/'
const saveBusssinessInfo = 'https://webapi.bigwayz.com/api/web/business-categorie/'
const sideMenuUrl = 'https://webapi.bigwayz.com/api/web/service-provider/'
const saveLanguage = 'https://webapi.bigwayz.com/api/mobile/language/'
const LOGOUT_URL = 'https://webapi.bigwayz.com/api/frontend/auth/logout/'
const GET_PACKAGE = 'https://bgadmin.bigwayz.com/api/getpackage'
// const saveKyc = 'https://webapi.bigwayz.com/api/mobile/kyc-details/' 
const saveKyc = 'https://bgadmin.bigwayz.com/api/kycupload/'
// const saveKyc = 'https://webapi.bigwayz.com/api/kycupload/'

const savePackage = 'https://webapi.bigwayz.com/api/web/package/'

const proofType = 'https://webapi.bigwayz.com/api/mobile/proof-type/'
const customerRegister = 'https://webapi.bigwayz.com/api/web/user-details/'
const cutomerVerifyOtp = 'https://webapi.bigwayz.com/api/web/user-OPT-verify/'
const historyData = 'https://webapi.bigwayz.com/api/mobile/transaction-history/'
const newsData = 'https://webapi.bigwayz.com/api/mobile/all-news/'
const newDetails = 'https://webapi.bigwayz.com/api/mobile/news/'
const ottData = 'https://webapi.bigwayz.com/api/mobile/all-ott/'
const ottDetails = 'https://webapi.bigwayz.com/api/mobile/ott/'
const sendOtpForSignup = 'https://webapi.bigwayz.com/api/mobile-OTP/'
const verifyOtpSignup = 'https://webapi.bigwayz.com/api/mobile-verification/'
const languageText = 'https://bgadmin.bigwayz.com/api/langtext/1/1'
const sendOtpForForgotPassword = 'https://webapi.bigwayz.com/api/mobile/forgot-password-otp/'
const forgotPassword = 'https://webapi.bigwayz.com/api/web/foreget-password-verify/'
const changePassword = 'https://webapi.bigwayz.com/api/mobile/change-password/'
const verifyForgotPassword = 'https://webapi.bigwayz.com/api/mobile/forgot-password-verify/';
const profileUrl = 'https://webapi.bigwayz.com/api/profile/detials/'

// const addTicket = 'https://webapi.bigwayz.com/api/supportadd'
// const getListTicket = 'https://bgadmin.bigwayz.com/api/supportlist'
// const viewTicket = 'https://webapi.bigwayz.com/api/supportview?support_id='
// const listTicketComment = 'https://webapi.bigwayz.com/api/supportcomment?ticket_id='
// const addComment = 'https://webapi.bigwayz.com/api/supportaddcomment'
// const inviteLink = 'https://bgadmin.bigwayz.com/api/generateInvite'


const addTicket = 'https://bgadmin.bigwayz.com/api/supportadd'
const getListTicket = 'https://bgadmin.bigwayz.com/api/supportlist'
const viewTicket = 'https://bgadmin.bigwayz.com/api/supportview?support_id='
const listTicketComment = 'https://webapi.bigwayz.com/api/supportcomment?ticket_id='
const addComment = 'https://bgadmin.bigwayz.com/api/supportaddcomment'
const inviteLink = 'https://bgadmin.bigwayz.com/api/generateInvite'




const aggrementdownloadLink = 'https://bgadmin.bigwayz.com/api/downloadaggrement'
const uploadAggrement = 'https://bgadmin.bigwayz.com/api/uploadaggrement'





// add ticket
export const _updateAggrement = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: uploadAggrement,
            data: request,
            headers: {
                // "Content-Type": "application/json", 
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })

}




// invite
export const _aggrementDownload = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: aggrementdownloadLink,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data && err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })
}


// invite
export const _invite = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: inviteLink,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data && err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })
}




// add ticket
export const _addComment = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: addComment,
            data: request,
            headers: {
                // "Content-Type": "application/json", 
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })

}







// view ticket comment list
export const _ticketCommentList = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${listTicketComment}${request.ticketId}`,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data && err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })
}
// view ticket
export const _viewTicket = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${viewTicket}${request.ticketId}`,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data && err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })
}

// get ticket list
export const _getTickets = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: getListTicket,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data && err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })
}



// add ticket
export const _addTicket = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: addTicket,
            data: request,
            headers: {
                // "Content-Type": "application/json", 
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })

}


// get news data 
export const _getProfile = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: profileUrl,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data && err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })
}







// verify forgot password
export const _verifyPassword = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: verifyForgotPassword,
            data: request,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// news Details
export const _changePassword = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: changePassword,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// send otp _sendOtpForForgotPassword
export const _forgotPassword = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: forgotPassword,
            data: request,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// send otp _sendOtpForForgotPassword
export const _sendOtpForForgotPassword = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: sendOtpForForgotPassword,
            data: request,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// get all global text
export const _getAllGlobalText = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: languageText,
            data: request,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if( err.response.data && err.response.data.detail == 'Invalid token.')
            // {
            //     localStorage.clear()
            //     history.push("/")  
            // }            
            reject(err)


        })
    })
}



// verify otp
export const _verifyOtpForSignup = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: verifyOtpSignup,
            data: request,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}



// send otp
export const _sendOtpForSignup = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: sendOtpForSignup,
            data: request,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}



// news Details
export const _ottDetails = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: ottDetails,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// get news data 
export const _ottData = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: ottData,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data && err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })
}



// news Details
export const _newsDetails = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: newDetails,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// get news data 
export const _getNewsData = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: newsData,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            // if (err.response.data && err.response.data.detail == 'Invalid token.') {
            //     localStorage.clear()
            //     history.push("/")
            // }
            reject(err)


        })
    })
}


// get history data 
export const _getHistory = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: historyData,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// customer verify 
export const _customerVerify = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: cutomerVerifyOtp,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// customer register 
export const _customerRegister = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: customerRegister,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// get proof id 
export const _getProofData = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: proofType,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// save kyc 
export const _savePackage = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: savePackage,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// save kyc 
export const _saveKyc = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: saveKyc,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data && err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// save lang 
export const _saveLanguage = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: saveLanguage,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}





// login 
export const _login = (request) => {
    try {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: loginUrl,
                data: request,
                headers: {
                    "content-type": "application/json"
                },
            }).then(resp => {
                resolve(resp.data)
            }).catch(err => {
                reject(err)
            })
        }).catch(err => { })
    } catch (err) {


    }

}

// logout 
export const _logout = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: LOGOUT_URL,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// logout 
export const _checkLogin = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: chkLogin,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response && err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}



// signup 
export const _signUp = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: signUpUrl,
            data: request,
            headers: {
                "Content-Type": "application/json"
            },
        }).then(resp => {
            resolve(resp)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// login 
export const _verifyOtp = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: otpVerifyUrl,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


export const _sendOtp = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: sendOtpUrl,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}



export const _basicDetails = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: basicDetailsUrl,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

export const _userBusinessDetails = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: userBusinessDetails,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// logout 
export const _getSideMenuData = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: sideMenuUrl,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response && err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}




// logout 
export const _getPackage = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: GET_PACKAGE,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)
        })
    })

}


// save bank details
export const _saveBankDetails = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: bankAccountDetails,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)
        })
    })

}


// save business information
export const _businessInformation = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: businessInformation,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}


// save business information
export const _subBusinessInfo = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: subBusinessInfo,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}

// save business information
export const _saveBusinessInfo = (request) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: saveBusssinessInfo,
            data: request,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${localStorage.getItem("accessToken")}`
            },
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            if (err.response.data.detail == 'Invalid token.') {
                localStorage.clear()
                history.push("/")
            }
            reject(err)


        })
    })

}




