/**
 * 
 * @about DistrubuterLogin or this file
 *  DistrubuterLogin or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"
// actions
import { login } from "../../redux/actions/Auth";
// inline error
import InlineError from "../common/InlineError";
import Loader from "../common/Loader";
// api services
import { _verifyPassword, _signUp, _verifyOtp, _sendOtpForSignup, _verifyOtpForSignup, _sendOtpForForgotPassword, _forgotPassword } from "../../config/api/Api";
import OtpModal from "../common/OtpModal";
// validation
import { validateMobileNo1 } from "../../utils/Validation"
// query string
import queryString from 'query-string'
// notify
import { notify } from "../../components/common/Toaster";
import BackImg from "../../assets/img/Distrubuter-BG.PNG"

let styleImg = {
    backgroundImage: "url(" + BackImg + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}



// Signup 
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateLoader: false,
            userName: '',
            userNameError: '',
            password: '',
            passwordError: '',
            mobNo: '',
            mobNoError: '',
            otp: '',
            otpError: '',
            showOtpModal: false,
            refere_id: '',
            role_id: '',
            sendOtp: false,

            newPassword: '',
            newPasswordError: ''
        };
    }

    // on change input fields
    onChangeInputFields = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            passwordError: '', mobNoError: '', newPasswordError: '', otpError: ''
        })
    }
   
    // on submit Sigup
    onSubmitSignup = (e) => {
        try {
            if (this.state.otp == "") {
                this.setState({ otpError: '*Please enter otp.' })
            }

            else if (this.state.newPassword == "") {
                this.setState({ newPasswordError: '*Please enter password.' })

            }
            else {
                this.setState({ stateLoader: true })
                let formData = new FormData();
                formData.append("otp", this.state.mobNo)
                formData.append("new_password", this.state.newPassword)
                formData.append("mobile_number", this.state.mobNo)

                _verifyPassword(formData)
                    .then(resp => {
                        if (resp.success) {
                            notify("success", `${resp.data.message}`)
                            this.props.history.push("/")

                        }
                        else {
                            this.setState({ stateLoader: false });
                            notify("err", `${resp.Message}`)

                        }

                    })
                    .catch(err => {
                        this.setState({ stateLoader: false });
                    })
            }
        }
        catch (err) {
            this.setState({ stateLoader: false });

        }
    }

    //sendOtp
    onSubmitOtp = () => {
        if (this.state.mobNo == "") {
            this.setState({ mobNoError: '*Please enter mobile no.' })
        }
        else if (!validateMobileNo1(this.state.mobNo).status) {
            this.setState({ mobNoError: "*Please enter valid mobile number." })
        }
        else {
            this.setState({ stateLoader: true })

            let formData = new FormData();
            formData.append("mobile_number", this.state.mobNo)
            _sendOtpForForgotPassword(formData)
                .then(resp => {
                    if (resp.success) {
                        notify("success", resp.data.message)
                        this.setState({ sendOtp: true, stateLoader: false })

                    }
                    else {
                        this.setState({ stateLoader: false, sendOtp: false })
                        notify("err", resp.Message)
                    }
                })
                .catch(err => {
                    this.setState({ stateLoader: false })
                })
        }
    }

    // render for view signup
    render() {
        return (
            <>
                <section className="distrubuter_login" style={styleImg}>
                    {this.state.stateLoader && <Loader />}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-3 text-left"></div>
                            <div className="col-sm-6 text-left">
                                <div className="login-form">
                                    <div className="main-div">
                                        <div className="panel">
                                            <img src={require("../../assets/img/Bigwayzlogo.png")} className="logo" />
                                            <p><span className="colortext">{this.props.allText && this.props.allText.forgot_password}</span></p>
                                        </div>
                                        {!this.state.sendOtp && <form id="Login" >
                                            <div className="form-group">
                                                <input type="text"
                                                    className={`form-control ${this.state.mobNoError != '' ? 'is_invalid' : ''}`}
                                                    maxLength={16}
                                                    id="mobNo"
                                                    placeholder={this.props.allText && this.props.allText.mobile}
                                                    name="mobNo"
                                                    onChange={this.onChangeInputFields}
                                                />
                                                <img src={require("../../assets/img/uid.png")} className="uid" />
                                                <InlineError
                                                    message={this.state.mobNoError}
                                                />
                                            </div>
                                            <input type="button" className="btn btn-primary signin" value={this.props.allText && this.props.allText.txt_submit}
                                                onClick={this.onSubmitOtp}
                                            />

                                        </form>}                   
                                        {this.state.sendOtp &&
                                            <form id="Login" >
                                                <div className="form-group">
                                                    <input type="text"
                                                        className={`form-control ${this.state.otpError != '' ? 'is_invalid' : ''}`}
                                                        maxLength={10}
                                                        id="otp"
                                                        placeholder={this.props.allText && this.props.allText.enter_top}
                                                        name="otp"
                                                        onChange={this.onChangeInputFields}
                                                    />
                                                     <img src={require("../../assets/img/uid.png")} className="uid" />
                                                    <InlineError
                                                        message={this.state.otpError}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password"
                                                        className={`form-control ${this.state.newPasswordError != '' ? 'is_invalid' : ''}`}
                                                        maxLength={30}
                                                        id="inputPassword"
                                                        placeholder={this.props.allText && this.props.allText.new_password}
                                                        name="newPassword"
                                                        onChange={this.onChangeInputFields}
                                                    />
                                                    <img src={require("../../assets/img/password.png")} className="password" />
                                                    <InlineError
                                                        message={this.state.newPasswordError}
                                                    />
                                                </div>
                                                <input type="button" className="btn btn-primary signin" value={this.props.allText && this.props.allText.txt_submit}
                                                    onClick={this.onSubmitSignup}
                                                />
                                            </form>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 text-left"></div>
                        </div>
                    </div>
                </section>


            </>

        )
    }
}


const mapStateToProps = state => {
    return {
        ...state,
        isLoading: state.loading.isLoading,
        allText: state.getTextContent.allText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ login, }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

