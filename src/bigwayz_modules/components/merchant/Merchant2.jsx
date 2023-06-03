/**
 * 
 * @about Merchant2 or this file
 *  Merchant2 or Merchant2 page
 * 
 * 
 */
// lib
import React, { Component } from "react";
// connect to store
import { connect } from "react-redux"
// api services
import {
    _userBusinessDetails
} from "../../config/api/Api";
import {
    _getCountryList,
    _getStateList,
    _getCityList,
    _businessType,
    _occupationType,
    _getPinCodeSearch,

} from "../../config/api/CommonApi";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateMobileNo1 } from "../../utils/Validation"



// Merchant2 classNameNameNameName
class Merchant2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            pan_name:'',
            pan_nameError:'',
            panNumber: '',
            panNumberError: '',
            businessName: '',
            businessNameError: '',
            SecondaryMobileNumber: '',
            SecondaryMobileNumberError: '',
            secondaryLandlineNumber: '',
            secondaryLandlineNumberError: '',
            gstNumber: '',
            gstNumberError: '',
            occupation: '',
            occupationError: '',
            address: '',
            addressError: '',
            pincode: '',
            pincodeError: '',
            state: 'Select State',
            stateError: '',
            country: 'Select Country',
            countryError: '',
            city: 'Select City',
            cityError: '',
            typeBusiness: '',
            typeBusinessError: '',


            countryList: [],
            stateList: [],
            cityList: [],
            businessType: [],
            occupationType: [],
            pincodeStatus: false

        };
    }

    componentDidMount() {
        this.getInfo()
    }
    getInfo = () => {
        _getCountryList()
            .then(resp => {

                this.setState({ countryList: JSON.parse(resp.data) })
            })

        _getStateList({})
            .then(resp => {

                this.setState({ stateList: JSON.parse(resp.data) })
            })

        _businessType({})
            .then(resp => {

                this.setState({ businessType: resp.data })
            })
        _occupationType({})
            .then(resp => {

                this.setState({ occupationType: resp.data })
            })

    }

    // handle on submit
    handleSubmit = () => {
        let regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
        let reggst = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/
        try {
           
            if (this.state.panNumber.trim() == "") {
                this.setState({ panNumberError: '*Please enter pan number.' })

            }

            else if (!regpan.test(this.state.panNumber)) {
                this.setState({ panNumberError: '*Please enter valid pan number' })
            }
            else if (this.state.pan_name.trim() == "") {
                this.setState({ pan_nameError: '*Please enter name as per pan.' })

            }

            else if (this.state.businessName.trim() == "") {
                this.setState({ businessNameError: '*Please enter business/shop name' })
            }


            // else if (this.state.SecondaryMobileNumber.trim() == "") {
            //     this.setState({ SecondaryMobileNumberError: '*Please enter secondary mobile number.' })
            // }
            // else if (!validateMobileNo1(this.state.SecondaryMobileNumber).status) {
            //     this.setState({ SecondaryMobileNumberError: "*Please enter valid mobile number." })

            // }
            // else if (this.state.secondaryLandlineNumber.trim() == "") {
            //     this.setState({ secondaryLandlineNumberError: '*Please enter secondary landline number.' })

            // }
            // else if (!validateMobileNo1(this.state.secondaryLandlineNumber).status) {
            //     this.setState({ secondaryLandlineNumberError: "*Please enter valid mobile number." })

            // }
            // else if (this.state.gstNumber.trim() == "") {
            //     this.setState({ gstNumberError: '*Please enter gst number.' })

            // }
            // else if (!reggst.test(this.state.gstNumber)) {
            //     this.setState({ gstNumberError: '*Please enter valid gst number' })
            // }
            else if (this.state.address.trim() == "") {
                this.setState({ addressError: '*Please enter address.' })

            }
            else if (this.state.country == "Select Country") {
                this.setState({ countryError: '*Please select country.' })

            }

            else if (this.state.state == "Select State") {
                this.setState({ stateError: '*Please select state.' })

            }

            else if (this.state.city == "Select City") {
                this.setState({ cityError: '*Please select city .' })

            }
            else if (this.state.pincode.trim() == "") {
                this.setState({ pincodeError: '*Please enter pincode number.' })

            }
            else if (!this.state.pincodeStatus) {
                this.setState({ pincodeError: '*Please enter valid pincode .' })

            }
            else if (this.state.typeBusiness == "") {
                this.setState({ typeBusinessError: '*Please select type of business.' })

            }
            else if (this.state.occupation == "") {
                this.setState({ occupationError: '*Please select capture occupation.' })

            }
            else {
                this.setState({ isLoading: true })
                let req =
                {
                    "name_pan_card":this.state.pan_name,
                    "pan": this.state.panNumber,
                    "business_name": this.state.businessName,
                    "secondary_mobile": this.state.SecondaryMobileNumber,
                    "secondary_landline": this.state.secondaryLandlineNumber,
                    "gst": this.state.gstNumber,
                    "occupation": this.state.occupation,
                    "address": this.state.address,
                    "pincode": this.state.pincode,
                    "state": this.state.state,
                    "country": this.state.country,
                    "city": this.state.city                    
                }


                _userBusinessDetails(req)
                    .then(resp => {

                        if (resp.success) {
                            notify("success", "details saved")
                            this.setState({ isLoading: false })
                            this.props.history.push("/dashboard")
                        }
                        else {
                            this.setState({ isLoading: false })

                        }
                    })
                    .catch(err => {
                        this.setState({ isLoading: false })
                    })
            }

        } catch (err) { this.setState({ isLoading: false }) }
    }

    // handle on change
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            panNumberError: '',
            businessNameError: '',
            SecondaryMobileNumberError: '',
            secondaryLandlineNumberError: '',
            gstNumberError: '',
            addressError: '',
            pincodeError: '',
            cityError: '',
            stateError: '',
            countryError: '',
            typeBusinessError: '',
            occupationError: '',
            pan_nameError:''

        })

        if (e.target.name == "state") {
            this.setState({ isLoading: true })
            _getCityList({ state_id: e.target.value })
                .then(resp => {

                    this.setState({ cityList: resp.data, isLoading: false })
                })
                .catch(err => this.setState({ isLoading: false }))

        }
        if (e.target.name == "pincode") {
            this.setState({ isLoading: true })
            _getPinCodeSearch({ city_id: Number(this.state.city), pincode: Number(e.target.value) })
                .then(resp => {
                    this.setState({ isLoading: false })

                    if (resp.data.length != 0) {
                        this.setState({ pincodeStatus: true, isLoading: false, pincodeError: '' })

                    }
                    else {
                        this.setState({ pincodeError: '*Please enter valid pincode.' })
                    }
                })
                .catch(err => this.setState({ isLoading: false }))


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
                                    <span><svg xmlns="http://www.w3.org/2000/svg" height="22px" fill="#444" viewBox="0 -24 480 480" width="22px"><path d="m456 72h-104v-32c-.027344-22.082031-17.917969-39.9726562-40-40h-144c-22.082031.0273438-39.972656 17.917969-40 40v32h-104c-13.253906 0-24 10.746094-24 24v178.078125c.0507812 10.148437 6.445312 19.175781 16 22.585937v111.335938c0 13.253906 10.746094 24 24 24h400c13.253906 0 24-10.746094 24-24v-111.328125c9.554688-3.414063 15.953125-12.445313 16-22.59375v-178.078125c0-13.253906-10.746094-24-24-24zm-312-32c0-13.253906 10.746094-24 24-24h144c13.253906 0 24 10.746094 24 24v32h-16v-32c0-4.417969-3.582031-8-8-8h-144c-4.417969 0-8 3.582031-8 8v32h-16zm160 32h-128v-24h128zm144 336c0 4.417969-3.582031 8-8 8h-400c-4.417969 0-8-3.582031-8-8v-108.585938l176 24.273438v20.3125c0 13.253906 10.746094 24 24 24h16c13.253906 0 24-10.746094 24-24v-20.3125l176-24.273438zm-192-64c0 4.417969-3.582031 8-8 8h-16c-4.417969 0-8-3.582031-8-8v-48c0-4.417969 3.582031-8 8-8h16c4.417969 0 8 3.582031 8 8zm208-69.921875c.003906 3.988281-2.929688 7.371094-6.878906 7.929687l-2.21875.304688-182.902344 25.222656v-11.535156c0-13.253906-10.746094-24-24-24h-16c-13.253906 0-24 10.746094-24 24v11.535156l-185.113281-25.527344c-3.949219-.554687-6.890625-3.9375-6.886719-7.929687v-178.078125c0-4.417969 3.582031-8 8-8h432c4.417969 0 8 3.582031 8 8zm0 0" /></svg></span>
                                    <label> {this.props.allText && this.props.allText.business_details} </label> 
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            <div className="row form-section form_row">                                                
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_panid"><strong>{this.props.allText && this.props.allText.txt_pan}*</strong></label>
                                                        <input
                                                            type="text"
                                                            id="merchant_panid"
                                                            name="panNumber"
                                                            className="form-control"
                                                            required
                                                            placeholder={this.props.allText && this.props.allText.enter_txt_pan}
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.panNumberError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                <label for="merchant_secmobile"><strong>{this.props.allText && this.props.allText.name_per_pan}*</strong></label>
                                                        <input
                                                            type="tel"
                                                            id="merchant_secmobile"
                                                            name="pan_name"
                                                            className="form-control"
                                                            placeholder={this.props.allText && this.props.allText.enter_name_per_pan}
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.pan_nameError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
        <label for="merchant_businessname"><strong>{this.props.allText && this.props.allText.business_shop_name}*</strong></label>
                                                        <input
                                                            type="text"
                                                            id="merchant_businessname"
                                                            name="businessName"
                                                            className="form-control"
                                                            required
                                                            placeholder={this.props.allText && this.props.allText.enter_business_shop_name}
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.businessNameError}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row form-section form_row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_secmobile"><strong>{this.props.allText && this.props.allText.secondary_mobile} </strong></label>
                                                        <input
                                                            type="tel"
                                                            id="merchant_secmobile"
                                                            name="SecondaryMobileNumber"
                                                            className="form-control"
                                                            placeholder={this.props.allText && this.props.allText.enter_secondary_mobile}
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.SecondaryMobileNumberError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_seclandline"><strong>{this.props.allText && this.props.allText.secondary_land} </strong></label>
                                                        <input
                                                            type="tel"
                                                            id="merchant_seclandline"
                                                            name="secondaryLandlineNumber"
                                                            className="form-control"
                                                            placeholder={this.props.allText && this.props.allText.enter_secondary_land}
                                                            onChange={this.handleOnChange}
                                                        />
                                                        <InlineError
                                                            message={this.state.secondaryLandlineNumberError}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_gst"><strong>{this.props.allText && this.props.allText.txt_gst} </strong></label>
                                                        <input
                                                            type="text"
                                                            id="merchant_gst"
                                                            name="gstNumber"
                                                            className="form-control"
                                                            placeholder={this.props.allText && this.props.allText.enter_txt_gst}
                                                            onChange={this.handleOnChange}
                                                        />
                                                        <InlineError
                                                            message={this.state.gstNumberError}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-section form_row">
                                                <div className="col-md-8">
                                                    <div className="form-group">
        <label for="merchant_address"><strong>{this.props.allText && this.props.allText.txt_address}*</strong></label>
                                                        <textarea
                                                            required
                                                            id="merchant_address"
                                                            className="form-control"
                                                            name="address"
                                                            placeholder={this.props.allText && this.props.allText.enter_txt_address}
                                                            onChange={this.handleOnChange}
                                                        />
                                                        <InlineError
                                                            message={this.state.addressError}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row form-section form_row">

                                                <div className="col-md-4">
                                                    <div className="form-group">
        <label for="merchant_country"><strong>{this.props.allText && this.props.allText.txt_country}* </strong></label  >
                                                        <select className="form-control" name="country" required onChange={this.handleOnChange} >
                                                          <option>{this.props.allText && this.props.allText.enter_txt_country}</option>
                                                            {
                                                                this.state.countryList.map((item, index) => (
                                                                    <option key={index} value={item.pk}>{item.fields.country_name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <InlineError
                                                            message={this.state.countryError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_state"><strong>{this.props.allText && this.props.allText.txt_state}* </strong></label>
                                                        <select className="form-control" name="state" id="merchant_state" onChange={this.handleOnChange} >
                                                        <option>{this.props.allText && this.props.allText.enter_txt_state}</option>
                                                            {
                                                                this.state.stateList.map((item, index) => (
                                                                    <option key={index} value={item.pk}>{item.fields.state_name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <InlineError
                                                            message={this.state.stateError}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_city"><strong>{this.props.allText && this.props.allText.txt_city}* </strong></label>
                                                        <select className="form-control" name="city" id="merchant_city" onChange={this.handleOnChange} >
                                                        <option>{this.props.allText && this.props.allText.enter_txt_city}</option>
                                                            {
                                                                this.state.cityList.map((item, index) => (
                                                                    <option key={index} value={item.id}>{item.city_name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <InlineError
                                                            message={this.state.cityError}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-section form_row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_pincode"><strong>{this.props.allText && this.props.allText.pincode_number}* </strong></label>
                                                        <input
                                                            type="text"
                                                            id="merchant_pincode"
                                                            name="pincode"
                                                            className="form-control"
                                                            placeholder={this.props.allText && this.props.allText.enter_pincode_number}
                                                            required
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.pincodeError}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_businesstype"><strong>{this.props.allText && this.props.allText.type_business}* </strong></label>
                                                        <select className="form-control" required name="typeBusiness" id="merchant_businesstype" onChange={this.handleOnChange} >
                                                        <option>{this.props.allText && this.props.allText.enter_type_business}</option>
                                                            {
                                                                this.state.businessType.map((item, index) => (
                                                                    <option key={index} value={item.description.id}>{item.description.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <InlineError
                                                            message={this.state.typeBusinessError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_occupation"><strong>{this.props.allText && this.props.allText.txt_occupation}* </strong></label>
                                                        <select className="form-control" required name="occupation" id="merchant_occupation" onChange={this.handleOnChange} >
                                                        <option>{this.props.allText && this.props.allText.enter_txt_occupation}</option>
                                                            {
                                                                this.state.occupationType.map((item, index) => (
                                                                    <option key={index} value={item.description.id}>{item.description.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <InlineError
                                                            message={this.state.occupationError}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form_row">
                                                <div className="col-md-12">
                                                    <div className="form-group form_bottom_btns">
                                                        <button type="button" onClick={() => this.props.history.goBack()} className="btn btn-primary">← {this.props.allText && this.props.allText.txt_back}</button>
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


export default connect(mapStateToProps)(Merchant2);





