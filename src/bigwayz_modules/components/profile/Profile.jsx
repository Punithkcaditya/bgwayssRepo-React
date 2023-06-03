/**
 * 
 * @about Profile or this file
 *  Profile or Home page
 * 
 * 
 */

// lib
import React, { Component } from "react";
import { connect } from "react-redux"
// api services
import {
    _getProfile
} from "../../config/api/Api";

// Profile class
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: '',
            stateLoader: true

        };
    }


    componentDidMount() {
        this.getUserProfile();
    }

    getUserProfile = () => {
        try {
            _getProfile()
                .then(resp => {
                    if (resp.success) {
                        this.setState({ stateLoader: false, userProfile: resp.data })

                    }


                })
                .catch(err => {

                })

        } catch (err) { }
    }

    render() {
        let data = new Date(this.state.userProfile && this.state.userProfile.dob).toLocaleDateString()
        return (
            <>
                <section className="list-left">
                    <div className="container">

                        <div className="row justify-content-md-end page-content-wraper">
                            <div className="col-lg-11 col-offset-1">
                                <h2 className="page-title" >
                                    <span><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" space="preserve" width="25px" height="25px" fill="#444">
                                        <g>
                                            <g>
                                                <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z" />
                                            </g>
                                        </g>
                                    </svg></span>
                                    <label > {this.props.allText && this.props.allText.txt_profile}</label>
                                </h2>
                                <div className="profile-content">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-tab-item">
                                            <a className="nav-link active" id="basic-tab" data-toggle="tab" href="#basic" role="tab" aria-controls="basic" aria-selected="true">{this.props.allText && this.props.allText.txt_basic}</a>
                                        </li>
                                        <li className="nav-tab-item">
                                            <a className="nav-link" id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="false">{this.props.allText && this.props.allText.txt_business}</a>
                                        </li>
                                        <li className="nav-tab-item">
                                            <a className="nav-link" id="package-tab" data-toggle="tab" href="#package" role="tab" aria-controls="package" aria-selected="false">{this.props.allText && this.props.allText.txt_package}</a>
                                        </li>
                                        <li className="nav-tab-item">
                                            <a className="nav-link" id="account-tab" data-toggle="tab" href="#bankaccount" role="tab" aria-controls="bankaccount" aria-selected="false">{this.props.allText && this.props.allText.bank_account}</a>
                                        </li>
                                        <li className="nav-tab-item">
                                            <a className="nav-link" id="kyc-tab" data-toggle="tab" href="#kyc" role="tab" aria-controls="kyc" aria-selected="false">{this.props.allText && this.props.allText.txt_kyc} <i className="fas fa-exclamation-circle"></i></a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="basic" role="tabpanel" aria-labelledby="basic-tab">
                                            <div className="profile-details-section">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.txt_uid}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.UID}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.name}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.cust_name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.email_id}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.mobile}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.cust_mobile}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.date_of_birth}</label>
                                                            <p>{data != 'Invalid Date' && data}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.txt_gender}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.gender}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                                            <div className="profile-details-section">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.txt_pan}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_details.cust_pan}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.business_shop_name}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_details.cust_busness_name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.txt_gst}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_details.GST}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.type_business}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_role.role_name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.txt_occupation}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_role.role_description}</p>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>Name as per pan</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_details.name_pan_card}</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="package" role="tabpanel" aria-labelledby="package-tab">
                                            <div className="profile-details-section">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.txt_package}</label>
                                                            <p>Gold</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="bankaccount" role="tabpanel" aria-labelledby="account-tab">
                                            <div className="profile-details-section">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.bank_account_number}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_bank.bank_act_number}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.name_bank}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_bank.customer_name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.bank_name}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_bank.cust_bank_name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.ifsc_code}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_bank.ifsc_code}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.bank_account_type}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_bank.type_account}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.email_id}</label>
                                                            <p>{this.state.userProfile && this.state.userProfile.customer_bank.cust_bank_email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="kyc" role="tabpanel" aria-labelledby="kyc-tab">
                                            <div className="profile-details-section">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.owner_photo}</label>&nbsp;&nbsp;<span>
                                                                {this.state.userProfile && this.state.userProfile.customer_kyc.owner_photo ? <i className="fas fa-check-circle"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.txt_pan}</label>&nbsp;&nbsp;<span>
                                                                {this.state.userProfile && this.state.userProfile.customer_kyc.pan_photo ? <i className="fas fa-check-circle"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.gst}</label>&nbsp;&nbsp;<span>
                                                                {this.state.userProfile && this.state.userProfile.customer_kyc.gst_photo ? <i className="fas fa-check-circle"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.shop_photo}</label>&nbsp;&nbsp;<span>
                                                                {this.state.userProfile && this.state.userProfile.customer_kyc.shop_photo ? <i className="fas fa-check-circle"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.address_proof}</label>
                                                            &nbsp;&nbsp; <span>
                                                                {this.state.userProfile && this.state.userProfile.customer_kyc.address_proof ? <i className="fas fa-check-circle"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="profile-section-item">
                                                            <label>{this.props.allText && this.props.allText.identity_proof}</label>
                                                            &nbsp;&nbsp;<span>
                                                                {this.state.userProfile && this.state.userProfile.customer_kyc.identity_proof ? <i className="fas fa-check-circle"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        isLoader: state.checkLoggedIn.isLoading,
        allText: state.getTextContent.allText
    }
}


export default connect(mapStateToProps)(Profile);


