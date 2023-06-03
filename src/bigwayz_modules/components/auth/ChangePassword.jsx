/**
 * 
 * @about ChangePassword or this file
 *  ChangePassword or ChangePassword page
 * 
 * 
 */
// lib
import React, { Component } from "react";
// connect to store
import { connect } from "react-redux"
// api services
import {
    _changePassword
} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateEmail } from "../../utils/Validation"



// ChangePassword classNameName
class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            oldPassword: '',
            oldPasswordError: '',
            newPassword: '',
            newPasswordError: ''

        };
    }


    handleSubmit = () => {
        try {
            if (this.state.oldPassword == "") {
                this.setState({ oldPasswordError: "*Please enter old password" })
            }

            else if (this.state.newPassword == "") {
                this.setState({ newPasswordError: "*Please enter new password." })
            }

            else {               
                this.setState({ isLoading: true })
                let formData = new FormData();
                formData.append("old_password", this.state.oldPassword)
                formData.append("new_password", this.state.newPassword)

                _changePassword(formData)
                    .then(resp => {
                        if (resp.success) {
                            notify("success", resp.data)
                            this.setState({ isLoading: false })
                            this.props.history.push("/dashboard")
                        }


                        else {
                            this.setState({ isLoading: false })
                            notify("err", resp.Message)
                        }

                    })
            }
        } catch (err) {
            this.setState({ isLoading: false })
        }

    }

    // handle on change
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, newPasswordError: '', oldPasswordError:''})

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
                                    <label> {this.props.allText && this.props.allText.change_password}</label>
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            <div className="row form-section ">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_emailid"><strong>{this.props.allText && this.props.allText.password}*</strong></label>
                                                        <input
                                                            type="email"
                                                            id="merchant_emailid"
                                                            name="oldPassword"
                                                            className="form-control"
                                                            required
                                                            placeholder={this.props.allText && this.props.allText.enter_old_password}
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.oldPasswordError}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-section ">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_emailid"><strong>{this.props.allText && this.props.allText.password}*</strong></label>
                                                        <input
                                                            type="email"
                                                            id="merchant_emailid"
                                                            name="newPassword"
                                                            className="form-control"
                                                            required
                                                            placeholder={this.props.allText && this.props.allText.enter_new_password}
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.newPasswordError}
                                                        />
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="row form_row">
                                                <div className="col-md-8">
                                                    <div className="form-group form_bottom_btns">
                                                        <button type="button" onClick={() => this.props.history.goBack()} className="btn btn-primary" >← {this.props.allText && this.props.allText.txt_back}</button>
                                                        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">{this.props.allText && this.props.allText.txt_submit} →</button>
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
        allText: state.getTextContent.allText
    }
}


export default connect(mapStateToProps)(ChangePassword);



