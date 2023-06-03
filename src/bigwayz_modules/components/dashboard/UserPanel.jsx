/**
 * 
 * @about Dashboard or this file 
 *  dashboard or Home page
 * 
 * 
 */



// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"

// actions
import { loginCheck } from "../../redux/actions/Auth";
// notify
import { notify } from "../common/Toaster";
// loader
import Loader from "../common/Loader";


// lib
import React, { Component } from "react";

// dashboard class
class UserPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
         count: 0

      };
   }

   // control on redirect
   handleRedirect = (params) => {
      let router = ""
      if (params == 1) {
         router = "verification"
      }
      else if (params == 2) {
         router = "/basic/Details"
      }
      else if (params == 3) {
         router = "/business/Details"
      }
      else if (params == 4) {
         router = "/package/selection"
      }
      else if (params == 5) {
         router = "/bank/account"
      }
      else if (params == 6) {
         router = "/business/information"
      }
      else if (params == 7) {
         router = "/kyc/upload"
      }



      this.props.history.push(router)
   }


   componentDidMount() {
      this.props.action.loginCheck();
   }


   render() {
      let num_progress = this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress
      return (
         <>
            {this.props.isLoading && <Loader /> || this.props.isLoader && <Loader />}
            <section className="list-left">
               <div className="container">
                  <div className="row">
                     <div className="col-md-1 col-sm-0">
                     </div>
                     <div className="col-md-11 col-sm-12">
                        <div className="checkList_wrap">
                           <div className="container">
                              <div className="row">                              
                                 <div className="col-md-12">
                                 <h5 style ={{display:'flex', alignItems:'center', justifyContent:'center'}}> {
                                         this.props.allText && this.props.allText.register_disclaimer_text

                                       }</h5>
                                       <br/>                                
                                    <ul className="checklist">
                                       
                                       <li className="check_item complete">
                                          <p><strong>{this.props.allText && this.props.allText.step} 1</strong> - {this.props.allText && this.props.allText.mobile_verification}</p>
                                          <div >
                                             <button onClick={() => this.handleRedirect(1)} disabled={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress != 1} className="btn btn-primary" >{num_progress > 1 ? this.props.allText && this.props.allText.txt_completed : this.props.allText && this.props.allText.not_completed} </button> <label className={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress > 1 ? "task_complete" : "task_incomplete"}></label></div>
                                       </li>
                                       <li className="check_item complete">
                                          <p><strong>{this.props.allText && this.props.allText.step} 2</strong> - {this.props.allText && this.props.allText.basic_details}</p>
                                          <div><button onClick={() => this.handleRedirect(2)} disabled={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress != 2} className="btn btn-primary">{num_progress > 2 ? this.props.allText && this.props.allText.txt_completed : this.props.allText && this.props.allText.not_completed}</button> <label className={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress > 2 ? "task_complete" : "task_incomplete"}></label></div>
                                       </li>
                                       <li className="check_item incomplete">
                                          <p><strong>{this.props.allText && this.props.allText.step} 3</strong> - {this.props.allText && this.props.allText.business_details} </p>
                                          <div ><button onClick={() => this.handleRedirect(3)} disabled={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress != 3} className="btn btn-primary">{num_progress > 3 ? this.props.allText && this.props.allText.txt_completed : this.props.allText && this.props.allText.not_completed}</button> <label className={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress > 3 ? "task_complete" : "task_incomplete"}></label></div>
                                       </li>
                                       <li className="check_item incomplete">
                                          <p><strong>{this.props.allText && this.props.allText.step} 4</strong> - {this.props.allText && this.props.allText.package_selection} </p>
                                          <div ><button onClick={() => this.handleRedirect(4)} disabled={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress != 4} className="btn btn-primary">{num_progress > 4 ? this.props.allText && this.props.allText.txt_completed : this.props.allText && this.props.allText.not_completed}</button> <label className={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress > 4 ? "task_complete" : "task_incomplete"}></label></div>
                                       </li>
                                       <li className="check_item incomplete">
                                          <p><strong>{this.props.allText && this.props.allText.step} 5</strong> - {this.props.allText && this.props.allText.bank_account} </p>
                                          <div><button onClick={() => this.handleRedirect(5)} disabled={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress != 5} className="btn btn-primary">{num_progress > 5 ? this.props.allText && this.props.allText.txt_completed : this.props.allText && this.props.allText.not_completed}</button> <label className={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress > 5 ? "task_complete" : "task_incomplete"}></label></div>
                                       </li>
                                       <li className="check_item incomplete">
                                          <p><strong>{this.props.allText && this.props.allText.step} 6</strong> - {this.props.allText && this.props.allText.business_information} </p>
                                          <div><button onClick={() => this.handleRedirect(6)} disabled={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress != 6} className="btn btn-primary">{num_progress > 6 ? this.props.allText && this.props.allText.txt_completed : this.props.allText && this.props.allText.not_completed}</button> <label className={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress > 6 ? "task_complete" : "task_incomplete"}></label></div>
                                       </li>
                                       <li className="check_item incomplete">
                                          <p><strong>{this.props.allText && this.props.allText.step} 7</strong> - {this.props.allText && this.props.allText.kyc_upload} </p>
                                          <div ><button onClick={() => this.handleRedirect(7)} disabled={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress != 7} className="btn btn-primary">{num_progress > 7 ? this.props.allText && this.props.allText.txt_completed : this.props.allText && this.props.allText.not_completed}</button> <label className={this.props.checkLoggedIn.step_inprogress && this.props.checkLoggedIn.step_inprogress.step_inprogress > 7 ? "task_complete" : "task_incomplete"}></label></div>
                                       </li>
                                    </ul>
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

const mapDispatchToProps = dispatch => {
   return {
      action: bindActionCreators({ loginCheck }, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);



