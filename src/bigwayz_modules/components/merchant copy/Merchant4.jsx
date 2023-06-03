/**
 * 
 * @about Merchant4 or this file
 *  Merchant4 or Merchant4 page 
 * 
 */


// lib
import React, { Component } from "react";
// connect to store
import { connect } from "react-redux"
import {
   _saveBankDetails

} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateMobileNo1, validateEmail, validateName } from "../../utils/Validation"



// Merchant4 classNameName
class Merchant4 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
         accountNo: '',
         accountNoError: '',
         bankIfscCode: '',
         bankIfscCodeError: '',
         email: '',
         emailError: '',
         bankName: '',
         bankNameError: '',
         name: '',
         nameError: '',
         typeOfAccount: 'Select Type of Account',
         typeOfAccountError: '',


      };
   }



   // handle on change
   handleOnChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
         emailError: '',
         bankNameError: '',
         nameError: '',
         typeOfAccountError: '',
         accountNoError: '',
         nameError: '',
         bankIfscCodeError: ''
      })

   }

   // on submit
   handleSubmit = () => {
      try {
       
         const bankAcc = /^\d{9,18}$/
         const ifsc = /^[A-Za-z]{4}\d{7}$/

         if (this.state.accountNo.trim() == '') {
            this.setState({ accountNoError: "*Please enter account number." })
         }

         else if (!bankAcc.test(this.state.accountNo)) {
            this.setState({ accountNoError: "*Please enter valid account number." })
         }
         else if (this.state.name.trim() == '') {
            this.setState({ nameError: "*Please enter name as per bank account." })
         }

         // else if (!validateName(this.state.name).status) {
         //    this.setState({ nameError: "*Please enter valid name." })
         // }
         else if (this.state.bankName.trim() == '') {
            this.setState({ bankNameError: "*Please enter bank name." })
         }

         // else if (!validateName(this.state.bankName).status) {
         //    this.setState({ bankNameError: "*Please enter valid bank name." })
         // }
         else if (this.state.bankIfscCode.trim() == '') {
            this.setState({ bankIfscCodeError: "*Please enter ifsc code" })
         }

         else if (!ifsc.test(this.state.bankIfscCode)) {
            this.setState({ bankIfscCodeError: "*Please enter valid ifsc code." })
         }
         else if (this.state.typeOfAccount == 'Select Type of Account') {
            this.setState({ typeOfAccountError: "*Please enter type of account." })
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
               ifsc_code: this.state.bankIfscCode,
               type_account: this.state.typeOfAccount,
               cust_bank_email: this.state.email,
               customer_name: this.state.name,
               cust_bank_name: this.state.bankName,
               bank_act_number: this.state.accountNo
            }


            _saveBankDetails(req)
               .then(resp => {
                  
                  if (resp.success) {
                     notify("success", "details saved")
                     this.setState({ isLoading: false })
                     this.props.history.push("/dashboard")
                  }
                  else{
                     this.setState({ isLoading: false })

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
                  <div className="row"></div>
                  <div className="col-md-1">

                  </div>
                  <div className="col-md-11 col-sm-12">
                     <h2 className="page-title">
                        <span><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" height="22px" fill="#444" width="25px" xml="preserve">
                           <g>
                              <g>
                                 <path d="M505.709,159.575L336.462,50.682c-3.379-2.174-7.879-1.196-10.052,2.181c-2.173,3.378-1.197,7.878,2.181,10.052    l166.773,107.301h-38.878L266.64,48.07c-6.463-4.158-14.816-4.157-21.28,0L55.514,170.216H16.636L255.991,16.204l33.899,21.81    c3.379,2.173,7.878,1.197,10.052-2.181c2.173-3.378,1.197-7.878-2.181-10.052l-33.899-21.81c-4.776-3.073-10.947-3.073-15.723,0    L6.291,159.575c-5.15,3.314-7.45,9.488-5.723,15.364c1.727,5.876,7.002,9.824,13.126,9.824h36.684v25.07v21.956    c0,5.789,4.106,10.637,9.558,11.784v12.801c0,6.64,5.402,12.042,12.042,12.042h1v89.112c0,4.017,3.256,7.273,7.273,7.273    c4.017,0,7.273-3.256,7.273-7.273v-96.385c0-4.017-3.256-7.273-7.273-7.273h-5.768v-10.04h51.513v10.038h-5.768    c-4.017,0-7.273,3.256-7.273,7.273v160.696c0,4.017,3.256,7.273,7.273,7.273h5.768v10.915H74.483V429.11h5.768    c4.017,0,7.273-3.256,7.273-7.273v-18.59c0-4.017-3.256-7.273-7.273-7.273c-4.017,0-7.273,3.256-7.273,7.273v11.317h-1    c-6.64,0-12.042,5.401-12.042,12.041v12.801c-5.453,1.147-9.558,5.995-9.558,11.784v14.682H24.614    c-8.04,0-14.581,6.541-14.581,14.581v15.299c0,8.04,6.541,14.581,14.581,14.581h462.772c8.04,0,14.581-6.541,14.581-14.581    v-15.299c0-8.04-6.541-14.581-14.581-14.581h-25.764V451.19c0-5.789-4.106-10.637-9.558-11.784v-12.801    c0-6.64-5.402-12.041-12.042-12.041h-1v-146.15h1c6.64,0,12.042-5.402,12.042-12.042v-12.801    c5.453-1.147,9.558-5.995,9.558-11.784v-21.956v-25.07h36.684c6.124,0,11.399-3.948,13.126-9.824    C513.159,169.063,510.859,162.888,505.709,159.575z M253.23,60.303c1.683-1.083,3.857-1.082,5.54,0l170.833,109.914H82.398    L253.23,60.303z M64.924,184.762h382.151v17.797h-77.902h-70.585h-85.176h-70.585H64.924V184.762z M296.304,439.408v-12.801    c0-6.64-5.402-12.041-12.042-12.041h-1v-146.15h1c6.64,0,12.042-5.402,12.042-12.042v-12.801    c5.453-1.147,9.558-5.995,9.558-11.784v-14.683H361.9v14.683c0,5.789,4.106,10.637,9.558,11.784v12.801    c0,6.64,5.402,12.042,12.042,12.042h1v146.15h-1c-6.64,0-12.042,5.401-12.042,12.041v12.801    c-5.452,1.147-9.558,5.995-9.558,11.784v14.682h-56.038v-14.682C305.862,445.403,301.756,440.555,296.304,439.408z     M140.542,439.408v-12.801c0-6.64-5.402-12.041-12.042-12.041h-1v-146.15h1c6.64,0,12.042-5.402,12.042-12.042v-12.801    c5.452-1.147,9.558-5.995,9.558-11.784v-14.683h56.039v14.683c0,5.789,4.106,10.637,9.558,11.784v12.801    c0,6.64,5.402,12.042,12.042,12.042h1v146.15h-1c-6.64,0-12.042,5.401-12.042,12.041v12.801    c-5.452,1.147-9.558,5.995-9.558,11.784v14.682H150.1v-14.682C150.1,445.403,145.994,440.555,140.542,439.408z M275.989,429.11    h5.768v10.915h-51.513V429.11h5.768c4.017,0,7.273-3.256,7.273-7.273V261.142c0-4.017-3.256-7.274-7.273-7.274h-5.768V243.83    h51.513v10.038h-5.768c-4.017,0-7.273,3.256-7.273,7.273v160.696C268.716,425.854,271.972,429.11,275.989,429.11z M222.97,229.284    h-0.032h-2.253v-12.178h70.63v12.178h-2.285c-0.005,0-0.011,0.001-0.016,0.001s-0.011-0.001-0.016-0.001H222.97z M220.685,454.213    c0.71,0.231,1.466,0.36,2.253,0.36h66.059c0.811,0,1.589-0.139,2.318-0.384v11.684h-70.63V454.213z M67.21,229.284h-2.285v-12.178    h70.63v12.178h-0.001h-2.285H67.21z M64.924,454.201c0.719,0.238,1.486,0.372,2.285,0.372h66.06c0.799,0,1.566-0.134,2.285-0.372    v11.672h-70.63V454.201z M487.421,480.454l-0.02,15.333c0,0-0.004,0.001-0.015,0.001l-462.807-0.034l0.035-15.334L487.421,480.454    z M444.77,454.572c0.807,0,1.58-0.137,2.306-0.379v11.68h-70.63v-11.665c0.713,0.234,1.473,0.364,2.265,0.364H444.77z     M391.772,253.869h-5.768V243.83h51.513v10.038h-5.768c-4.017,0-7.273,3.256-7.273,7.273v160.696c0,4.017,3.256,7.274,7.273,7.274    h5.768v10.915h-51.513v-10.915h5.768c4.017,0,7.273-3.256,7.273-7.273V261.142C399.045,257.125,395.789,253.869,391.772,253.869z     M447.077,229.284L447.077,229.284h-2.286c-0.003,0-0.007,0.001-0.01,0.001s-0.007-0.001-0.01-0.001h-66.039h-0.02h-2.265v-12.178    h70.63V229.284z" />
                              </g>
                           </g>
                           <g>
                              <g>
                                 <path d="M259.076,113.165V90.459c7.83,0.559,10.738,4.138,13.422,4.138c3.356,0,4.922-4.25,4.922-6.375    c0-5.48-10.738-7.829-18.344-8.053v-3.02c0-1.343-1.677-2.573-3.355-2.573c-1.902,0-3.244,1.231-3.244,2.573v3.244    c-10.626,1.118-21.252,6.711-21.252,20.804c0,14.317,11.186,18.344,21.252,21.923v26.283c-11.409-0.894-14.429-8.724-18.12-8.724    c-2.796,0-5.145,3.691-5.145,6.376c0,5.481,9.395,12.975,23.265,13.199h0v3.468c0,1.343,1.342,2.573,3.244,2.573    c1.677,0,3.355-1.231,3.355-2.573v-3.803c12.08-1.677,20.357-9.283,20.357-23.041    C279.433,121.666,268.807,116.744,259.076,113.165z M253.149,111.04c-5.929-2.237-10.738-4.586-10.738-10.962    c0-5.816,4.474-8.612,10.738-9.395V111.04z M258.406,149.181V125.58c5.48,2.349,9.842,5.481,9.843,12.528    C268.249,144.483,264.446,148.063,258.406,149.181z" />
                              </g>
                           </g>
                        </svg></span>
                        <label> Bank Account Details</label>
                     </h2>
                     <form>
                        <div className="merchant_form_wrap">
                           <div className="container">
                              <div className="row form-section form_row">
                                 <div className="col-md-4">
                                    <div className="form-group">
      <label for="merchant_panid"><strong>{this.props.allText && this.props.allText.bank_account_number}*</strong></label> 
                                       <input
                                          type="text"
                                          id="merchant_bankaccountnumber"
                                          name="accountNo"
                                          className="form-control"
                                          required            
                                          onChange={this.handleOnChange}
                                          placeholder={this.props.allText && this.props.allText.enter_bank_account_number}
                                       />
                                       <InlineError
                                          message={this.state.accountNoError}
                                       />
                                    </div>
                                 </div>
                                 <div className="col-md-4">
                                    <div className="form-group">
      <label for="merchant_nameinbank"><strong>{this.props.allText && this.props.allText.name_bank}*</strong></label>
                                       <input
                                          type="text"
                                          id="merchant_nameinbank"
                                          name="name"
                                          className="form-control"
                                          required="" placeholder={this.props.allText && this.props.allText.enter_name_bank}
                                          onChange={this.handleOnChange}
                                       />
                                       <InlineError
                                          message={this.state.nameError}
                                       />
                                    </div>
                                 </div>
                                 <div className="col-md-4">
                                    <div className="form-group">
      <label for="merchant_bankname"><strong>{this.props.allText && this.props.allText.bank_name}* </strong></label>
                                       <input
                                          type="text"
                                          id="merchant_bankname"
                                          name="bankName"
                                          className="form-control"
                                          placeholder={this.props.allText && this.props.allText.enter_bank_name}
                                          onChange={this.handleOnChange}
                                       />
                                       <InlineError
                                          message={this.state.bankNameError}
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="row form-section form_row">
                                 <div className="col-md-4">
                                    <div className="form-group">
                                       <label for="merchant_ifsc"><strong>{this.props.allText && this.props.allText.ifsc_code}* </strong></label>
                                       <input
                                          type="text"
                                          id="merchant_ifsc"
                                          name="bankIfscCode"
                                          className="form-control"
                                          placeholder={this.props.allText && this.props.allText.enter_ifsc_code}
                                          onChange={this.handleOnChange}

                                       />
                                       <InlineError
                                          message={this.state.bankIfscCodeError}
                                       />
                                    </div>
                                 </div>
                                 <div className="col-md-4">
                                    <div className="form-group">
      <label for="merchant_gst"><strong>{this.props.allText && this.props.allText.bank_account_type}* </strong></label>
                                       <select className="form-control" name="typeOfAccount" required="" id="merchant_accounttype" onChange={this.handleOnChange} >
                                          <option>Select Type of Account</option>
                                          <option value="savings">Savings</option>
                                          <option value="current">Current</option>
                                       </select>
                                       <InlineError
                                          message={this.state.typeOfAccountError}
                                       />
                                    </div>
                                 </div>
                                 <div className="col-md-4">
                                    <div className="form-group">
      <label for="merchant_emailid"><strong>{this.props.allText && this.props.allText.email_id}*</strong></label>
                                       <input
                                          type="email"
                                          id="merchant_emailid"
                                          name="email" className="form-control"
                                          placeholder={this.props.allText && this.props.allText.enter_email}
                                          onChange={this.handleOnChange}
                                       />
                                       <InlineError
                                          message={this.state.emailError}
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="row form_row">
                                 <div className="col-md-12">
                                    <div className="form-group form_bottom_btns">
      <button onClick={() => this.props.history.goBack()} className="btn btn-primary">← {this.props.allText && this.props.allText.txt_back}</button>
                                       <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>{this.props.allText && this.props.allText.txt_submit} →</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
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


export default connect(mapStateToProps)(Merchant4);


