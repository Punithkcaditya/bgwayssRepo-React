/**
 * 
 * @about Merchant5 or this file
 *  Merchant5 or Merchant5 page
 * 
 * 
 */

// lib
import React, { Component } from "react";
// connect to store
import { connect } from "react-redux"
import {
    _businessInformation,
    _subBusinessInfo,
    _saveBusinessInfo
} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateMobileNo1, validateEmail, validateName } from "../../utils/Validation"

import { geolocated } from "react-geolocated";
import Geolocated1 from "../common/Location";

// Merchant5 classNameName
class Merchant5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            businessInfoData: [],
            subCategoryData: [],
            businessInfo: 'Select Category',
            subBusinessInfo: 'Sub Category',
            businessInfoError: '',
            subBusinessInfoError: '',
            longitude: '',
            latitude: ''




        };
    }



    // handle on change
    handleOnChange = (e) => {
        try {
            this.setState({
                [e.target.name]: e.target.value,
                businessInfoError: '',
                subBusinessInfoError: ''

            })


            if (e.target.name == "businessInfo") {
                this.setState({ isLoading: true })

                let formData = new FormData()
                formData.append("parent_id", e.target.value);

                _subBusinessInfo(formData)
                    .then(resp => {
                        if (resp.success) {
                            this.setState({ subCategoryData: resp.data, isLoading: false })
                        }

                    })
                    .catch(err => { })
            }

        } catch (err) { }
    }


    componentDidMount() {
        this.getDetails()
    }

    // get info 
    getDetails = () => {

        let formData = new FormData()
        formData.append("parent_id", 0);

        _businessInformation(formData)
            .then(resp => {
                if (resp.success) {
                    this.setState({ businessInfoData: resp.data, isLoading: false })
                }
                else {
                    this.setState({ isLoading: false })

                }

            })
            .catch(err => { this.setState({ isLoading: false }) })
    }



    // on submit
    onSubmit = () => {

        if (this.state.businessInfo == 'Select Category') {
            this.setState({ businessInfoError: "*Please select category." })

        }
        else if (this.state.subBusinessInfo == 'Sub Category') {
            this.setState({ subBusinessInfoError: "*Please select sub category." })
        }
        else {
            this.setState({ isLoading: true })
            let req = {
                category_id: Number(this.state.subBusinessInfo),
                // latitude: 28.3421,
                // longitude: 78.631,

                latitude: this.state.latitude,
                longitude: this.state.longitude,
            }
            _saveBusinessInfo(req)
                .then(resp => {

                    if (resp.success) {
                        // notify("success", "details saved")
                        notify("success", resp.data)
                        this.setState({ isLoading: false })
                        this.props.history.push("/dashboard")
                    }
                    else {
                        this.setState({ isLoading: false })
                    }
                })
                .catch(err => { this.setState({ isLoading: false }) })
        }

    }

    // setLatLong
    setLatLong = (data) => {
        try {
            this.setState({ latitude: data.lat, longitude: data.lng })

        } catch (err) { }
    }


    render() {
        return (
            <>
                {this.state.isLoading && <Loader />}
                <Geolocated1
                    getLatLng={(data) => this.setLatLong(data)}
                />
                <section className="list-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-11 col-sm-12">
                                <h2 className="page-title">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" width="25px" height="25px" fill="#444" xml="preserve">
                                        <g>
                                            <g>
                                                <path d="M404.267,315.41c-10.048-20.949-45.995-50.027-80.725-78.123c-19.371-15.659-37.675-30.464-49.344-42.133    c-2.923-2.944-7.296-3.883-11.157-2.496c-7.189,2.603-11.627,4.608-15.125,6.165c-5.333,2.389-7.125,3.2-14.315,3.925    c-3.179,0.32-6.037,2.027-7.808,4.672c-15.083,22.549-30.699,20.629-41.131,17.131c-3.328-1.109-3.925-2.539-4.245-3.904    c-2.24-9.365,9.003-31.168,23.573-45.739c34.667-34.688,52.544-43.371,90.304-26.496c42.837,19.157,85.76,34.155,86.187,34.304    c5.611,1.941,11.648-1.003,13.589-6.571c1.92-5.568-1.003-11.648-6.571-13.589c-0.427-0.149-42.496-14.848-84.48-33.643    c-48.917-21.867-75.755-7.467-114.091,30.891c-14.592,14.592-34.411,44.117-29.291,65.771c2.197,9.216,8.683,16.043,18.325,19.221    c24.171,7.979,46.229,0.341,62.656-21.461c6.784-1.045,10.475-2.581,16.021-5.077c2.005-0.896,4.352-1.941,7.467-3.2    c12.203,11.456,28.672,24.789,46.016,38.805c31.36,25.365,66.923,54.123,74.923,70.763c3.947,8.213-0.299,13.568-3.179,16.021    c-4.224,3.627-10.005,4.779-13.141,2.581c-3.456-2.368-7.957-2.517-11.52-0.384c-3.584,2.133-5.589,6.165-5.141,10.304    c0.725,6.784-5.483,10.667-8.171,12.011c-6.827,3.456-13.952,2.859-16.619,0.384c-2.987-2.773-7.275-3.584-11.072-2.176    c-3.797,1.429-6.443,4.928-6.827,8.981c-0.64,6.997-5.824,13.717-12.587,16.341c-3.264,1.237-8,1.984-12.245-1.899    c-2.645-2.389-6.315-3.307-9.749-2.475c-3.477,0.853-6.272,3.371-7.488,6.72c-0.405,1.067-1.323,3.627-11.307,3.627    c-7.104,0-19.883-4.8-26.133-8.939c-7.488-4.928-54.443-39.957-94.997-73.92c-5.696-4.8-15.552-15.083-24.256-24.171    c-7.723-8.064-14.784-15.381-18.411-18.453c-4.544-3.84-11.264-3.264-15.04,1.259c-3.797,4.501-3.243,11.243,1.259,15.04    c3.307,2.795,9.707,9.557,16.768,16.917c9.515,9.941,19.349,20.224,25.963,25.771c39.723,33.259,87.467,69.163,96.981,75.413    c7.851,5.163,24.768,12.416,37.867,12.416c10.517,0,18.603-2.411,24.213-7.125c7.509,2.923,16.043,2.944,24.256-0.256    c9.707-3.755,17.685-11.328,22.208-20.501c8.405,1.792,18.027,0.533,26.773-3.861c8.555-4.309,14.741-10.901,17.813-18.603    c8.491,0.448,17.237-2.56,24.469-8.768C407.979,346.407,411.349,330.109,404.267,315.41z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M213.333,138.663h-96c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h96    c5.888,0,10.667-4.779,10.667-10.667S219.221,138.663,213.333,138.663z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M435.52,292.711c-3.307-4.885-9.92-6.229-14.805-2.901l-31.189,20.949c-4.885,3.285-6.187,9.92-2.901,14.805    c2.069,3.051,5.44,4.715,8.875,4.715c2.027,0,4.096-0.576,5.931-1.813l31.189-20.949    C437.504,304.231,438.805,297.597,435.52,292.711z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M369.301,343.613c-7.637-6.016-41.792-40.981-62.912-62.997c-4.075-4.267-10.837-4.416-15.083-0.32    c-4.267,4.075-4.395,10.837-0.32,15.083c5.483,5.717,53.845,56.128,65.088,65.003c1.941,1.536,4.288,2.283,6.592,2.283    c3.136,0,6.272-1.408,8.405-4.075C374.72,353.981,373.931,347.261,369.301,343.613z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M326.677,365.01c-12.779-10.219-44.885-44.331-52.139-52.224c-4.011-4.352-10.731-4.608-15.083-0.64    c-4.331,3.989-4.629,10.752-0.64,15.083c0.384,0.405,38.699,41.771,54.528,54.443c1.963,1.557,4.331,2.325,6.656,2.325    c3.115,0,6.229-1.387,8.341-3.989C332.011,375.399,331.264,368.679,326.677,365.01z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M284.224,386.493c-15.211-12.821-46.336-45.952-52.416-52.459c-4.032-4.309-10.795-4.544-15.083-0.512    c-4.309,4.032-4.523,10.773-0.512,15.083c8.747,9.365,38.528,40.939,54.251,54.208c2.005,1.685,4.437,2.517,6.869,2.517    c3.029,0,6.059-1.301,8.171-3.797C289.301,397.01,288.725,390.29,284.224,386.493z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M124.672,120.253C106.389,102.93,33.28,97.319,11.307,96.018c-3.029-0.149-5.824,0.853-7.957,2.88    C1.216,100.903,0,103.719,0,106.663v192c0,5.888,4.779,10.667,10.667,10.667h64c4.608,0,8.704-2.965,10.133-7.36    c1.557-4.779,38.315-117.589,43.157-173.056C128.235,125.671,127.04,122.471,124.672,120.253z M66.88,287.997H21.333V118.098    c34.283,2.709,71.275,8.597,84.715,15.125C100.395,179.943,74.816,262.951,66.88,287.997z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M501.333,117.33c-83.755,0-130.219,21.44-132.16,22.336c-2.773,1.301-4.843,3.712-5.696,6.635s-0.427,6.059,1.173,8.661    c13.184,21.227,54.464,139.115,62.4,167.872c1.28,4.629,5.483,7.829,10.283,7.829h64c5.888,0,10.667-4.779,10.667-10.667v-192    C512,122.087,507.221,117.33,501.333,117.33z M490.667,309.33h-45.355c-10.112-32.939-39.979-118.827-56.64-154.325    c16.277-5.525,51.243-15.019,101.995-16.213V309.33z" />
                                            </g>
                                        </g>
                                    </svg></span>
                                    <label> {this.props.allText && this.props.allText.business_information} </label>
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            <div className="row form-section form_row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_category"><strong>{this.props.allText && this.props.allText.txt_category}*</strong></label>
                                                        <select className="form-control" required name="businessInfo" id="merchant_category" onChange={this.handleOnChange} >
                                                            >
        <option>{this.props.allText && this.props.allText.enter_txt_category}</option>
                                                            {
                                                                this.state.businessInfoData && this.state.businessInfoData.map((item, index) => (
                                                                    <option key={index} value={item.id}>{item.description.business_name}</option>
                                                                ))
                                                            }

                                                        </select>
                                                        <InlineError
                                                            message={this.state.businessInfoError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_subcategory"><strong>{this.props.allText && this.props.allText.txt_sub_category}*</strong></label>
                                                        <select className="form-control" required name="subBusinessInfo" id="merchant_subcategory" onChange={this.handleOnChange} >
                                                            <option>{this.props.allText && this.props.allText.enter_txt_sub_category}</option>
                                                            {
                                                                this.state.subCategoryData && this.state.subCategoryData.map((item, index) => (
                                                                    <option key={index} value={item.id}>{item.description.business_name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <InlineError
                                                            message={this.state.subBusinessInfoError}
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form_row">
                                                <div className="col-md-12">
                                                    <div className="form-group form_bottom_btns">
                                                        <button type="button" className="btn btn-primary" onClick={() => this.props.history.goBack()} >← {this.props.allText && this.props.allText.txt_back}</button>
                                                        <button type="button" className="btn btn-primary" onClick={this.onSubmit}>{this.props.allText && this.props.allText.txt_submit} →</button>
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


export default connect(mapStateToProps)(Merchant5);


