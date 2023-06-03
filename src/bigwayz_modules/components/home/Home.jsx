/**
 * 
 * @about Dashboard or this file 
 *  dashboard or Home page
 */
// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"
// actions
import { loginCheck } from "../../redux/actions/Auth";
// loader
import Loader from "../common/Loader";
// lib
import React, { Component } from "react";

// dashboard class
class Home extends Component {
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
                                    <>
                                       <ul className="checklist">
                                          <li className="check_item complete">
                                             <h5> {this.props.allText && this.props.allText.account_getting_verified}</h5>
                                          </li>
                                       </ul>
                                    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);



