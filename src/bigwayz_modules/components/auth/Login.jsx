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
import { getAllGlobalText } from "../../redux/actions/Text";

// actions
import { login } from "../../redux/actions/Auth";

// inline error
import InlineError from "../common/InlineError";

import Loader from "../common/Loader";

import BackImg from "../../assets/img/Distrubuter-BG.PNG"

let styleImg = {
    backgroundImage: "url(" + BackImg + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

// DistrubuterLogin class
class DistrubuterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userNameError: '',
            password: '',
            passwordError: '',

        };
    }

    componentDidMount() {
        // this.props.action.getAllGlobalText()
    }


    // on change input fields
    onChangeInputFields = (e) => {
        this.setState({ [e.target.name]: e.target.value, passwordError: '', userNameError: '' })
    }


    // on submit login
    onSubmitLogin = (e) => {

        if (this.state.userName == "") {
            this.setState({ userNameError: '*Please enter uid' })
        }
        else if (this.state.password == "") {
            this.setState({ passwordError: '*Please enter password' })

        }
        else {

            let req =
            {
                "password": this.state.password,
                "UID": this.state.userName
            }

            this.props.action.login(req)
        }
    }

    render() {
        if (localStorage.getItem("isLoggedIn"))
            this.props.history.push("dashboard")
        return (
            <>
                <section className="distrubuter_login" style={styleImg}>
                    {this.props.isLoading && <Loader />}
                    <div className="container-fluid" >
                        <div className="row">
                            <div className="col-sm-3 text-left"></div>
                            <div className="col-sm-6 text-left">
                                <div className="login-form">
                                    <div className="main-div">
                                        <div className="panel">
                                            <img src={require("../../assets/img/Bigwayzlogo.png")} className="logo" />
                                            <p><span className="colortext">{this.props.allText && this.props.allText.login}</span></p>
                                        </div>
                                        <form id="Login">
                                            <div className="form-group">
                                                <div className="input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml="preserve" width="35" height="35" fill="#fff">
                                                        <g>
                                                            <g>
                                                                <path d="M298.667,25.6h-85.333c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h85.333    c4.71,0,8.533-3.823,8.533-8.533C307.2,29.423,303.377,25.6,298.667,25.6z"></path>
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path d="M358.4,25.6h-8.533c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h8.533    c4.71,0,8.533-3.823,8.533-8.533C366.933,29.423,363.11,25.6,358.4,25.6z"></path>
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path d="M266.598,435.2H245.41c-12.979,0-23.543,10.564-23.543,23.543v4.122c0,12.979,10.564,23.535,23.535,23.535h21.188    c12.979,0,23.543-10.556,23.543-23.535v-4.122C290.133,445.764,279.569,435.2,266.598,435.2z M273.067,462.865    c0,3.567-2.901,6.468-6.468,6.468H245.41c-3.575,0-6.477-2.901-6.477-6.468v-4.122c0-3.575,2.901-6.477,6.477-6.477h21.18    c3.576,0,6.477,2.901,6.477,6.477V462.865z"></path>
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path d="M370.227,0H141.781c-17.007,0-30.848,13.841-30.848,30.848v450.304c0,17.007,13.841,30.848,30.848,30.848h228.437    c17.007,0,30.848-13.841,30.848-30.839V30.848C401.067,13.841,387.226,0,370.227,0z M384,481.152    c0,7.595-6.178,13.781-13.773,13.781H141.781c-7.603,0-13.781-6.187-13.781-13.773V30.848c0-7.595,6.178-13.781,13.781-13.781    h228.437c7.603,0,13.781,6.187,13.781,13.781V481.152z"></path>
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path d="M392.533,51.2H119.467c-4.71,0-8.533,3.823-8.533,8.533v358.4c0,4.71,3.823,8.533,8.533,8.533h273.067    c4.71,0,8.533-3.823,8.533-8.533v-358.4C401.067,55.023,397.244,51.2,392.533,51.2z M384,409.6H128V68.267h256V409.6z"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <input type="text"
                                                    className={`form-control ${this.state.userNameError != '' ? 'is_invalid' : ''}`}
                                                    id="inputEmail"
                                                    placeholder={this.props.allText && this.props.allText.txt_uid}
                                                    name="userName"
                                                    onChange={this.onChangeInputFields}
                                                />
                                                <div className="cm_alert_danger">
                                                    <InlineError
                                                        message={this.state.userNameError}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" xml="preserve" width="35" height="35" fill="#fff">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <path d="M230.792,354.313l-6.729,60.51c-0.333,3.01,0.635,6.031,2.656,8.292c2.021,2.26,4.917,3.552,7.948,3.552h42.667     c3.031,0,5.927-1.292,7.948-3.552c2.021-2.26,2.99-5.281,2.656-8.292l-6.729-60.51c10.927-7.948,17.458-20.521,17.458-34.313     c0-23.531-19.135-42.667-42.667-42.667S213.333,296.469,213.333,320C213.333,333.792,219.865,346.365,230.792,354.313z      M256,298.667c11.76,0,21.333,9.573,21.333,21.333c0,8.177-4.646,15.5-12.125,19.125c-4.073,1.979-6.458,6.292-5.958,10.781     l6.167,55.427h-18.833l6.167-55.427c0.5-4.49-1.885-8.802-5.958-10.781c-7.479-3.625-12.125-10.948-12.125-19.125     C234.667,308.24,244.24,298.667,256,298.667z"></path>
                                                                    <path d="M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32     C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333     V202.667C448,196.771,443.229,192,437.333,192z M128,149.333c0-70.583,57.417-128,128-128s128,57.417,128,128V192h-21.333     v-42.667c0-58.813-47.854-106.667-106.667-106.667S149.333,90.521,149.333,149.333V192H128V149.333z M341.333,149.333V192     H170.667v-42.667C170.667,102.281,208.948,64,256,64S341.333,102.281,341.333,149.333z M426.667,469.333     c0,11.76-9.573,21.333-21.333,21.333H106.667c-11.76,0-21.333-9.573-21.333-21.333v-256h341.333V469.333z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <input type="password"
                                                    className={`form-control ${this.state.passwordError != '' ? 'is_invalid' : ''}`}
                                                    id="inputPassword"
                                                    placeholder={this.props.allText && this.props.allText.password}
                                                    name="password"
                                                    onChange={this.onChangeInputFields}
                                                />

                                                <div className="cm_alert_danger">
                                                    <InlineError
                                                        message={this.state.passwordError}
                                                    />
                                                </div>
                                            </div>
                                            <div className="btn-wrap">
                                                <input type="button"
                                                    className="btn btn-primary signin"
                                                    value={this.props.allText && this.props.allText.sign_in}
                                                    // value={this.props.getAllGlobalText.txt_signin}
                                                    onClick={this.onSubmitLogin}
                                                />
                                                <input type="button" className="forgot_pwrd_link"
                                                    value={this.props.allText && this.props.allText.forgot_password}
                                                    onClick={() => this.props.history.push("/forgotpassword")}
                                                />
                                            </div>
                                        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(DistrubuterLogin);

