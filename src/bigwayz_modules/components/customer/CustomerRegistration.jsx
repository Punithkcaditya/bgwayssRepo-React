/**
 * 
 * @about CustomerRegistration or this file
 *  CustomerRegistration or CustomerRegistration page
 * 
 * 
 */


// lib
import React, { Component } from "react";
import {
    _customerRegister,
    _customerVerify

} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateMobileNo1, validateEmail, validateName } from "../../utils/Validation"



// CustomerRegistration classNameName
class CustomerRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,

            fullName: '',
            fullNameError: '',
            mobileNo: '',
            mobileNoError: '',
            email: '',
            emailError: '',
            isSendOtp: false,
            otp: '',
            otpError: ''



        };
    }



    // handle on change
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            emailError: '',
            fullNameError: '',
            mobileNoError: ''

        })

    }

    handleCondistion = () => {
        if (this.state.isSendOtp)
            this.handleOtp()
        else
            this.handleSubmit()
    }

    // on submit
    handleSubmit = () => {
        try {
            if (this.state.fullName == "") {
                this.setState({ fullNameError: "*Please enter full name." })

            }
            else if (this.state.mobileNo == "") {
                this.setState({ mobileNoError: "*Please enter mobile number." })

            }
            else if (!validateMobileNo1(this.state.mobileNo).status) {
                this.setState({ mobileNoError: "*Please enter valid mobile number." })
            }


            else if (this.state.email == "") {
                this.setState({ emailError: "*Please enter email id." })

            }
            else if (!validateEmail(this.state.email).status) {
                this.setState({ emailError: "*Please enter valid email id." })
            }

            else {
                this.setState({ isLoading: true })

                let req = {
                    user_name: this.state.fullName,
                    user_mobile: this.state.mobileNo,
                    user_email: this.state.email,
                }




                _customerRegister(req)
                    .then(resp => {
                           if (resp.success) {  
                            notify("success", resp.data.message)                           
                            this.setState({ isLoading: false, isSendOtp: true })
                            // this.props.history.push("/dashboard")
                        }
                        else {
                            notify("err", resp.Message)
                            this.setState({ isLoading: false })

                        }
                    })
                    .catch(err => { this.setState({ isLoading: false }) })


            }

        } catch (err) {
            this.setState({ isLoading: false })
        }



    }

    handleOtp = () => {
        try {
            if (this.state.otp == "") {
                this.setState({ otpError: "*Please enter otp." })

            }

            else {
                this.setState({ isLoading: true })
                let req = {
                    otp: this.state.otp,
                    user_mobile: this.state.mobileNo
                }

                _customerVerify(req)
                    .then(resp => {

                        if (resp.success) {
                            notify("success", resp.data)
                            this.setState({ isLoading: false})
                            this.props.history.push("/dashboard")
                        }
                        else {
                            this.setState({ isLoading: false })
                            notify("err", resp.Message)
                           

                        }
                    })
                    .catch(err => { this.setState({ isLoading: false }) })
            }

        } catch (err) {
            this.setState({ isLoading: false })
        }

    }



    render() {
        return (
            <>
                {this.state.isLoading && <Loader />}
                <section className="list-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-11 col-sm-12">
                                <h2 className="page-title">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml="preserve" width="25px" height="25px" fill="#444">
                                        <g>
                                            <g>
                                                <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z" />
                                            </g>
                                        </g>
                                    </svg></span>
                                    <label>Customer Registration</label>
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            {
                                                this.state.isSendOtp ?
                                                    <div className="row form-section form_row">

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="merchant_bankname"><strong>Otp* </strong></label>
                                                                <input
                                                                    type="text"
                                                                    id="merchant_bankname"
                                                                    maxLength = {15}
                                                                    name="otp"
                                                                    className="form-control"
                                                                    placeholder="Enter otp"
                                                                    onChange={this.handleOnChange}
                                                                />
                                                                <InlineError
                                                                    message={this.state.otpError}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    :
                                                    <>
                                                        <div className="row form-section form_row">

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label for="merchant_bankname"><strong>Full Name* </strong></label>
                                                                    <input
                                                                        type="text"
                                                                        id="merchant_bankname"
                                                                        name="fullName"
                                                                        maxLength = {50}
                                                                        className="form-control"
                                                                        placeholder="Enter full name"
                                                                        onChange={this.handleOnChange}
                                                                    />
                                                                    <InlineError
                                                                        message={this.state.fullNameError}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label for="merchant_ifsc"><strong>Mobile Number* </strong></label>
                                                                    <input
                                                                        type="text"
                                                                        id="merchant_ifsc"
                                                                        name="mobileNo"
                                                                        maxLength = {20}
                                                                        className="form-control"
                                                                        placeholder="Enter mobile number"
                                                                        onChange={this.handleOnChange}

                                                                    />
                                                                    <InlineError
                                                                        message={this.state.mobileNoError}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-section form_row">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label for="merchant_emailid"><strong>Email Id*</strong></label>
                                                                    <input
                                                                        type="email"
                                                                        maxLength = {64}
                                                                        id="merchant_emailid"
                                                                        name="email" className="form-control"
                                                                        placeholder="Enter your email id"
                                                                        onChange={this.handleOnChange}
                                                                    />
                                                                    <InlineError
                                                                        message={this.state.emailError}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                            }

                                            <div className="row form_row">
                                                <div className="col-md-12">
                                                    <div className="form-group form_bottom_btns">
                                                        <button onClick={() => this.props.history.goBack()} className="btn btn-primary">← Back</button>
                                                        <button type="button" className="btn btn-primary" onClick={this.handleCondistion}>Submit →</button>
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

export default CustomerRegistration;

