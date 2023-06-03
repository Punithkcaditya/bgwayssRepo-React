/**
 * 
 * @about Merchant0 or this file
 *  Merchant0 or Merchant0 page
 * 
 * 
 */
// lib
import React, { Component } from "react";
// notify
import { notify } from "../../components/common/Toaster";

// redux
// connect to store
import { connect } from "react-redux"
// bind actions
// api services
import { _sendOtp, _verifyOtp } from "../../config/api/Api";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import {validateMobileNo1} from "../../utils/Validation"



// Merchant0 className
class Merchant0 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otpState: false,
            phonenumber: '',
            phoneNOError: '',
            otp: '',
            isLoading: false

        };
    }

    componentDidMount() {

    }


    // handle otp
    // handle send otp
    handleSendOtp = () => {
        try {
            if (this.state.otpState) {
                if (this.state.otp.trim() == "") {
                    this.setState({ otpError: "*Please enter otp." })

                }
            
                else {
                    this.setState({ isLoading: true })
                    let req = {
                        otp: this.state.otp
                    }
                    _verifyOtp(req)
                        .then(resp => {
                            if(resp.success) {                           
                            this.setState({ otpState: true, isLoading: false })
                            notify("success", resp.data)
                            this.props.history.push("/dashboard")    
                        }
                        if(!resp.success) {
                            this.setState({ otpState: true, isLoading: false })
                            notify("err", resp.Message)
                        
                        }

                        })
                }
            }
            else {            
              
                    this.setState({ isLoading: true })
                    _sendOtp()
                        .then(resp => {
                            
                            if(resp.success) {  
                            this.setState({ otpState: true, isLoading: false })
                            notify("success", resp.data.message)
                            }
                        })
                
            }
        }
        catch (err) {
            this.setState({ isLoading: false })
        }


    }

    // handle on change
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, phoneNOError: '', otpError: '' })

    }

    render() {
        return (
            <>
                {this.state.isLoading && <Loader />}
                <section className="list-left">
                    <div className="container">                       
                        <div className="row">
                            <div className="col-md-1 col-sm-2">

                            </div>
                            <div className="col-md-11 col-sm-10">
                                <h2 className="page-title">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml="preserve" width="25px" height="25px" fill="#444">
                                        <g>
                                            <g>
                                                <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z" />
                                            </g>
                                        </g>
                                    </svg></span>
                                    <label> Mobile Nummber Verification</label>
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            {!this.state.otpState &&
                                                <div className="row form-section form_row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="merchant_phonenumber"><strong>Mobile Number*</strong></label>
                                                            <input
                                                                type="tel"
                                                                id="merchant_phonenumber"
                                                                name="phonenumber"
                                                                className={`form-control ${this.state.phoneNOError != '' ? 'is_invalid' : ''}`}
                                                                required
                                                                placeholder="Enter your mobile no"
                                                                // onChange={this.handleOnChange}
                                                                disabled
                                                                value = {this.props.checkLoggedIn && this.props.checkLoggedIn.cust_mobile }
                                                            />
                                                            <InlineError
                                                                message={this.state.phoneNOError}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                this.state.otpState &&
                                                <div className="row form-section form_row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="merchant_otp"><strong>OTP</strong></label>
                                                            <input type="tel"
                                                                id="merchant_otp"
                                                                name="otp"
                                                                className={`form-control ${this.state.otpError != '' ? 'is_invalid' : ''}`}
                                                                required
                                                                placeholder="Enter the OTP"
                                                                onChange={this.handleOnChange}
                                                            />
                                                            <InlineError
                                                                message={this.state.otpError}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            <div className="row form_row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button type="button" onClick={() => this.props.history.goBack()} className="btn btn-primary" >← {this.props.allText && this.props.allText.txt_back}</button>
                                                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;
                                                        <button type="button" onClick={this.handleSendOtp} className="btn btn-primary" >{this.props.allText && this.props.allText.txt_submit} →</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="bottom"></div>
                        </div>
                    </div>
                </div>


            </>

        )
    }
} 

const mapStateToProps = state => {
    return {
        ...state,
       isLoading: state.loading.isLoading, 
       isLoader:state.checkLoggedIn.isLoading,      
       allText: state.getTextContent.allText
    }
 }

 
 export default connect(mapStateToProps)(Merchant0);
 
 
 
 

