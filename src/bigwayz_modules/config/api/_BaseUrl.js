
import React from "react";
import axios from "axios"; 

const loginUrl = 'http://mipythont.azurewebsites.net/api/auth/frontend/token/login/'
const chkLogin = 'https://mipythont.azurewebsites.net/api/web/login-check/'
const signUpUrl = 'https://mipythont.azurewebsites.net/api/frontend/user-registration/'
const otpVerifyUrl ='https://mipythont.azurewebsites.net/api/frontend/verify-otp/'
const sendOtpUrl = 'https://mipythont.azurewebsites.net/api/frontend/send-otp/'
const basicDetailsUrl = 'https://mipythont.azurewebsites.net/api/frontend/user-basic-details/'
const userBusinessDetails = 'https://mipythont.azurewebsites.net/api/frontend/user-business-details/'
const LOGOUT_URL = 'http://mipythont.azurewebsites.net/api/frontend/auth/logout/'
const GET_PACKAGE = 'http://mipythont.azurewebsites.net/api/web/package/'

