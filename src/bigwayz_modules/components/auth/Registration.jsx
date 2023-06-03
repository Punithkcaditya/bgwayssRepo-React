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
import { _signUp, _verifyOtp, _sendOtpForSignup, _verifyOtpForSignup } from "../../config/api/Api";

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
class SignUP extends Component {
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
            showOtpModal: false,
            refere_id: '',
            role_id: ''


        };
    }

    componentDidMount() {
        const { search } = this.props.location
        const { refere_id, role_id } = queryString.parse(search)
        if (refere_id && role_id)
            this.setState({ refere_id, role_id })
        else
            this.props.history.push("/")


    }


    // on change input fields
    onChangeInputFields = (e) => {
        this.setState({ [e.target.name]: e.target.value, passwordError: '', userNameError: '', mobNoError: '' })
    }


    // handleSubmit = () => {

    //     if (!this.state.showOtpModal)
    //         this.onSubmitSignup()
    //     if (this.state.showOtpModal)
    //         this.onVerifyAndSignup()


    // }


    // on submit Sigup
    onSubmitSignup = (e) => {

        try {
            if (this.state.userName == "") {
                this.setState({ userNameError: '*Please enter uid.' })
            }
            else if (this.state.mobNo == "") {
                this.setState({ mobNoError: '*Please enter mobile no.' })

            }
            else if (!validateMobileNo1(this.state.mobNo).status) {
                this.setState({ mobNoError: "*Please enter valid mobile number." })

            }
            else if (this.state.password == "") {
                this.setState({ passwordError: '*Please enter password.' })

            }
            else {
                this.setState({ stateLoader: true })

                let req =
                {
                    "mobile_number": this.state.mobNo,
                }

                _sendOtpForSignup(req)
                    .then(resp => {
                        if (resp.success) {
                            notify("success", `${resp.data.message}`)
                            this.setState({ showOtpModal: true, stateLoader: false });
                        }
                        else {
                            this.setState({ showOtpModal: false, stateLoader: false });
                            notify("err", `${resp.Message}`)

                        }

                    })
                    .catch(err => {
                        this.setState({ showOtpModal: false, stateLoader: false });
                    })
            }
        }
        catch (err) {
            this.setState({ showOtpModal: false, stateLoader: false });

        }
    }



    // verify otp
    onVerifyAndSignup = () => {

        try {
            if (this.state.otp == '') {
                alert("*Please enter otp")

            } else {
                this.setState({ stateLoader: true })
                let req = {
                    mobile_number: this.state.mobNo,
                    otp: this.state.otp
                }
                _verifyOtpForSignup(req)
                    .then(resp => {
                        if (resp.success) {
                            this.completSignup()
                            this.setState({ stateLoader: false })

                        }
                        else {
                            notify("err", `${resp.Message}`)
                            this.setState({ stateLoader: false })
                        }

                    }).catch(err => {
                        this.setState({ stateLoader: false })

                    })
            }

        } catch (err) { this.setState({ stateLoader: false }) }
    }

    // complete signup
    completSignup = () => {
        this.setState({ stateLoader: true, showOtpModal: false })
        try {
            let req =
            {
                "customer_name": this.state.userName,
                "mobile": this.state.mobNo,
                "password": this.state.password,
                "refere_id": Number(this.state.refere_id),
                "role_id": Number(this.state.role_id)
            }

            _signUp(req)
                .then(resp => {
                    if (resp.data.success) {
                        notify("success", `${resp.data.data}`)
                        this.onClickCancel();
                    }
                    else {
                        this.setState({ showOtpModal: false, stateLoader: false });
                        notify("err", `${resp.data.Message}`)

                    }

                })
                .catch(err => {
                    this.setState({ showOtpModal: false, stateLoader: false });
                })


        } catch (err) { }
    }

    // on change otp
    handleOtp = (e) => {
        this.setState({ otp: e })

    }
    // on cancel 
    onClickCancel = () => {
        this.setState({ showOtpModal: false, stateLoader: false })
        localStorage.clear();
        this.props.history.push("/")
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
                                            <p><span className="colortext">{this.props.allText && this.props.allText.sign_up}</span></p>
                                        </div>
                                        <form id="Login" >
                                            <div className="form-group">
                                                <input type="text"
                                                    className={`form-control ${this.state.userNameError != '' ? 'is_invalid' : ''}`}
                                                    maxLength={30}
                                                    id="inputEmail"
                                                    placeholder={this.props.allText && this.props.allText.name}
                                                    name="userName"
                                                    onChange={this.onChangeInputFields}
                                                />
                                                <img src={require("../../assets/img/user.jpg")} className="uid" />
                                                <InlineError
                                                    message={this.state.userNameError}
                                                />
                                            </div>
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

                                            <div className="form-group">
                                                <input type="password"
                                                    className={`form-control ${this.state.passwordError != '' ? 'is_invalid' : ''}`}
                                                    maxLength={30}
                                                    id="inputPassword"
                                                    placeholder={this.props.allText && this.props.allText.password}
                                                    name="password"
                                                    onChange={this.onChangeInputFields}
                                                />
                                                <img src={require("../../assets/img/password.png")} className="password" />
                                                <InlineError
                                                    message={this.state.passwordError}
                                                />
                                            </div>
                                            <input type="button" className="btn btn-primary signin" value={this.props.allText && this.props.allText.sign_up}
                                                onClick={this.onSubmitSignup}
                                            />
                                            <input type="button" className="forgot_pwrd_link" value={this.props.allText && this.props.allText.have_account} onClick={this.onClickCancel} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 text-left"></div>
                        </div>
                        {
                            this.state.showOtpModal &&
                            <OtpModal
                                {...this.props}
                                value={this.state.otp}
                                mobileText={this.state.mobNo}
                                handleSubmitOtp={() => this.onVerifyAndSignup()}
                                onClickCancel={() => this.onClickCancel()}
                                onChange={(e) => this.handleOtp(e)}
                            />
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUP);

