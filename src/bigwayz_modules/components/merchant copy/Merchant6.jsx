/**
 * 
 * @about Merchant6 or this file
 *  Merchant6 or Merchant6 page
 * 
 * 
 */


// lib
import React, { Component } from "react";
import { connect } from "react-redux"
import {
    _saveKyc,
    _getProofData,
} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateMobileNo1, validateEmail, validateName } from "../../utils/Validation"


// Merchant0 classNameName
class Merchant6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            ownerPhoto: '',
            ownerPhotoError: '',
            shopPhoto: '',
            shopPhotoError: '',
            gstPhoto: '',
            gstError: '',
            panPhoto: '',
            panPhotoError: '',
            addressPhoto: '',
            addressPhotoError: '',

            addressProofId: 'Select Address Proof',
            addressProofIdError: '',
            identityProofId: 'Select Identity Proof',
            identityProofIdError: '',

            addressProof: '',
            addressProofError: '',
            identityProofPhoto: '',
            identityProof: '',
            identityProofError: '',
            proofData: [],

            chPhoto: '',
            chPhotoError: ''



        };
    }

    componentDidMount() {
        this.getProofIdData()

    }

    getProofIdData = () => {
        try {
            _getProofData()
                .then(resp => {

                    if (resp.data.success) {
                        this.setState({ proofData: resp.data.data, isLoading: false })
                    }
                    else
                        this.setState({ isLoading: false })
                })
                .catch(err => { this.setState({ isLoading: false }) })

        } catch (err) { this.setState({ isLoading: false }) }

    }

    // on upload error
    onImageUpload = e => {
        try {
            let file = e.target.files[0]
            this.setState({
                [e.target.name]: file,

                ownerPhotoError: '',
                shopPhotoError: '',
                gstError: '',
                panPhotoError: '',
                addressProofIdError: '',
                addressPhotoError: '',
                identityProofError: '',
                identityProofIdError: '',
                chPhotoError: ''





            })
            // this.setState({ coverImg: file, fileName: file.name, fileUploadFileError: '' })
        } catch (err) {

        }
    }



    // handle on change
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            ownerPhotoError: '',
            shopPhotoError: '',
            gstError: '',
            panPhotoError: '',
            addressProofIdError: '',
            addressPhotoError: '',
            identityProofError: '',
            identityProofIdError: '',
            chPhotoError: ''
        })

    }

    // on submit
    onSubmit = () => {
        if (this.state.ownerPhoto == '') {
            this.setState({ ownerPhotoError: '*Please select owner photo.' })
        }
        else if (this.state.shopPhoto == '') {
            this.setState({ shopPhotoError: '*Please select shop photo.' })
        }
        // else if (this.state.gstPhoto == '') {
        //     this.setState({ gstError: '*Please select gst photo.' })
        // }
        else if (this.state.panPhoto == '') {
            this.setState({ panPhotoError: '*Please select pan photo.' })
        }

        else if (this.state.addressProofId == 'Select Address Proof') {
            this.setState({ addressProofIdError: '*Please select address proof.' })
        }
        else if (this.state.identityProofId == 'Select Identity Proof') {
            this.setState({ identityProofIdError: '*Please select identity proof.' })
        }
        else if (this.state.chPhoto == '') {
            this.setState({ chPhotoError: '*Please select cheque photo.' })
        }


        else if (this.state.addressPhoto == '') {
            this.setState({ addressPhotoError: '*Please select address proof photo.' })
        }
        else if (this.state.identityProofPhoto == '') {
            this.setState({ identityProofError: '*Please select identity proof photo.' })
        }


        else {
            let formData = new FormData()
            formData.append("owner_photo", this.state.ownerPhoto);
            formData.append("shop_photo", this.state.shopPhoto);
            formData.append("gst_photo", this.state.gstPhoto);
            formData.append("pan_photo", this.state.panPhoto);
            formData.append("address_proof", this.state.addressPhoto);
            formData.append("address_proof_id", this.state.addressProofId);
            formData.append("identity_proof", this.state.identityProofPhoto);
            formData.append("identity_proof_id", this.state.identityProofId);
            formData.append("cheque_photo", this.state.chPhoto);

            try {
                this.setState({ isLoading: true })
                _saveKyc(formData)
                    .then(resp => {
                        if (resp.status) {
                            // notify("success", "details saved")
                            notify("success", resp.response)
                            this.setState({ isLoading: false })
                            this.props.history.push("/dashboard")
                        }
                        else {
                            this.setState({ isLoading: false })

                        }

                    })
                    .catch(err => { this.setState({ isLoading: false }) })

            } catch (err) {
                this.setState({ isLoading: false })

            }
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
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="-48 0 500 500.40043" width="25px" height="25px" fill="#444"><path d="m6.722656 406h152.199219c14.011719 55.441406 63.851563 94.316406 121.039063 94.402344 68.765624 0 124.714843-56.0625 124.714843-124.832032 0-68.765624-55.945312-124.769531-124.710937-124.769531-7.613282-.011719-15.214844.675781-22.703125 2.046875-13.808594-48.289062-57.863281-81.644531-108.085938-81.847656h-36.808593c-62.09375.175781-112.3007818 50.636719-112.167969 112.730469v114.808593c0 3.863282 2.660156 7.460938 6.523437 7.460938zm383.953125-30.542969c0 61.144531-49.566406 110.714844-110.710937 110.714844-61.148438 0-110.714844-49.570313-110.714844-110.714844s49.566406-110.714843 110.714844-110.714843c61.117187.070312 110.644531 49.597656 110.710937 110.714843zm-376.476562-91.683593c-.15625-54.382813 43.796875-98.601563 98.179687-98.773438h36.785156c43.746094.191406 82.175782 29.089844 94.5 71.066406-52.503906 16.160156-88.351562 64.648438-88.410156 119.585938.023438 5.464844.367188 10.921875 1.03125 16.347656h-142.085937zm0 0" /><path d="m130.652344 157h.039062v-6.777344l.070313 7.113282c43.496093-.050782 78.730469-35.324219 78.738281-78.820313-.019531-20.875-8.339844-40.882813-23.132812-55.613281-14.792969-14.730469-34.835938-22.9726565-55.710938-22.902344h-.035156c-43.355469.0078125-78.492188 35.164062-78.484375 78.515625.007812 43.355469 35.164062 78.492187 78.515625 78.484375zm-45.820313-124.089844c12.140625-12.1875 28.65625-18.996094 45.859375-18.910156h.027344c35.625-.007812 64.507812 28.859375 64.519531 64.484375.007813 35.621094-28.863281 64.507813-64.484375 64.515625h-.097656c-26.148438.132812-49.78125-15.542969-59.828125-39.679688-10.046875-24.140624-4.515625-51.957031 14.003906-70.410156zm0 0" /><path d="m208.800781 448.699219c1.855469.003906 3.636719-.734375 4.949219-2.050781l6.101562-6.097657 17.675782 17.527344c2.726562 2.710937 7.132812 2.710937 9.859375 0l25.222656-25.035156c1.320313-1.308594 2.066406-3.09375 2.070313-4.953125.003906-1.863282-.734376-3.648438-2.050782-4.964844l-17.675781-17.675781 37.316406-37.316407c17.363281 12.222657 41.191407 9.132813 54.859375-7.113281 13.671875-16.25 12.636719-40.253906-2.375-55.269531-15.015625-15.015625-39.023437-16.046875-55.269531-2.378906-16.25 13.671875-19.339844 37.5-7.113281 54.863281l-78.523438 78.519531c-2.003906 2.003906-2.601562 5.011719-1.519531 7.628906 1.085937 2.617188 3.636719 4.320313 6.46875 4.320313zm48.964844-20.648438-15.308594 15.195313-12.699219-12.601563 15.296876-15.300781zm58-120.15625c14.824219.003907 26.84375 12.023438 26.84375 26.847657 0 14.824218-12.019531 26.84375-26.847656 26.84375-14.824219 0-26.84375-12.019532-26.84375-26.84375.019531-14.816407 12.023437-26.820313 26.839843-26.839844zm0 0" /></svg></span>
                                    <label> {this.props.allText && this.props.allText.kyc_upload} </label>
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            <div className="row form-section form_row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_photo"><strong>{this.props.allText && this.props.allText.owner_photo}*</strong></label>
                                                        <input
                                                            type="file"
                                                            id="merchant_photo"
                                                            name="ownerPhoto"
                                                            accept="image/png,image/jpeg"
                                                            onChange={this.onImageUpload}
                                                        />
                                                        <InlineError
                                                            message={this.state.ownerPhotoError}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_shopphoto"><strong>{this.props.allText && this.props.allText.shop_photo}*</strong></label>
                                                        <input type="file" id="merchant_shopphoto" name="shopPhoto"
                                                            onChange={this.onImageUpload}
                                                        />
                                                        <InlineError
                                                            message={this.state.shopPhotoError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_gst"><strong>{this.props.allText && this.props.allText.gst}</strong></label>
                                                        <input
                                                            type="file" id="merchant_gst" name="gstPhoto"
                                                            onChange={this.onImageUpload}
                                                        />
                                                        {/* <InlineError
                                                            message={this.state.gstError}
                                                        /> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-section form_row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_pan"><strong>{this.props.allText && this.props.allText.txt_pan}*</strong></label>
                                                        <input type="file" id="merchant_pan" name="panPhoto"
                                                            onChange={this.onImageUpload}
                                                        />
                                                        <InlineError
                                                            message={this.state.panPhotoError}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="merchant_aadhar"><strong>{this.props.allText && this.props.allText.cheque_photo}*</strong></label>
                                                        <input type="file" id="merchant_proof" name="chPhoto"
                                                            onChange={this.onImageUpload}
                                                        />
                                                        <InlineError
                                                            message={this.state.chPhotoError}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_addressproof"><strong>{this.props.allText && this.props.allText.address_proof}*</strong></label>
                                                        <select className="form-control" required="" id="merchant_addressproof" name="addressProofId" onChange={this.handleOnChange} >
                                                            <option>{this.props.allText && this.props.allText.enter_address_proof} </option>
                                                            {
                                                                this.state.proofData && this.state.proofData.map((item, index) => (
                                                                    <option key={index} value={item.id}>{item.description.name}</option>

                                                                ))
                                                            }

                                                        </select>
                                                        <InlineError
                                                            message={this.state.addressProofIdError}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        {/* <label for="merchant_aadhar"><strong>{this.props.allText && this.props.allText.txt_aahdar}*</strong></label> */}
                                                        <input type="file" id="merchant_proof" name="addressPhoto"
                                                            onChange={this.onImageUpload}
                                                        />
                                                        <InlineError
                                                            message={this.state.addressPhotoError}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_addressproof"><strong>{this.props.allText && this.props.allText.identity_proof}*</strong></label>
                                                        <select className="form-control" required="" id="merchant_addressproof" name="identityProofId" onChange={this.handleOnChange} >
                                                            <option>{this.props.allText && this.props.allText.enter_identity_proof} </option>
                                                            {
                                                                this.state.proofData && this.state.proofData.map((item, index) => (
                                                                    <option key={index} value={item.id}>{item.description.name}</option>

                                                                ))
                                                            }
                                                        </select>
                                                        <InlineError
                                                            message={this.state.identityProofIdError}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        {/* <label for="merchant_dl"><strong>{this.props.allText && this.props.allText.txt_dl_number}*</strong></label> */}
                                                        <input type="file" id="merchant_dl" name="identityProofPhoto"
                                                            onChange={this.onImageUpload}
                                                        />
                                                        <InlineError
                                                            message={this.state.identityProofError}
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


export default connect(mapStateToProps)(Merchant6);

