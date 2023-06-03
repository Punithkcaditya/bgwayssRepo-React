/**
 * 
 * @about AddTicket or this file
 *  AddTicket or AddTicket page
 * 
 * 
 */
// lib
import React, { Component } from "react";
// connect to store
import { connect } from "react-redux"
// api services
import {
    _invite
} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateEmail } from "../../utils/Validation"
import { CopyToClipboard } from 'react-copy-to-clipboard';



// AddTicket classNameName
class AddTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            link: ''

        };
    }

    componentDidMount() {
        this.getToken()
    }

    getToken = () => {
        try {
            _invite()
                .then(resp => {
                    
                    if (resp.status) {
                        this.setState({ link: resp.result.link, isLoading: false })

                    }
                })
                .catch(err => {
                   

                })
        } catch (err) { }

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
                                    <label> {this.props.allText && this.props.allText.invite_user_title}</label>
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            <div className="row form-section ">
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        {/* <label for="merchant_emailid"><strong>{this.props.allText && this.props.allText.title_request}*</strong></label> */}
                                                              <p>{this.state.link}</p>
                                                        
                                                        {/* <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">Share via Whatsapp</a> */}
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row form_row">
                                                <div className="col-md-8">
                                                    <div className="form-group form_bottom_btns">
                                                        {/* <button type="button"  className="btn btn-primary" >← {this.props.allText && this.props.allText.txt_copy}</button> */}
                                                        <CopyToClipboard text={this.state.link}
                                                            onCopy={() => notify("success", "Copied!") }>
                                                             <button type="button"  className="btn btn-primary">{this.props.allText && this.props.allText.txt_copy} →</button>
                                                        </CopyToClipboard>
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


export default connect(mapStateToProps)(AddTicket);



