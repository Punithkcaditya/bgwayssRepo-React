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
    _viewTicket,
    _ticketCommentList,
    _addComment
} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";
// validation
import { validateEmail } from "../../utils/Validation"



// AddTicket classNameName
class ViewTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            oldPassword: '',
            oldPasswordError: '',
            newPassword: '',
            newPasswordError: '',

            ticketTitle: '',
            ticketTitleError: '',

            ticketDesc: '',
            ticketDescError: '',

            ticketPhoto: '',
            ticketPhotoError: '',

            ticketInfo: '',
            comment: '',
            commentError: '',
            ticketCommentInfo: []

        };
    }






    componentDidMount() {
        this.getTicket()
        this.getCommentList()
    }

    getTicket = () => {
        try {

            let req = {
                ticketId: this.props.match.params.id
            }
            _viewTicket(req)
                .then(resp => {
                    if (resp.status) {
                        this.setState({ ticketInfo: resp.result[0], isLoading: false })
                    }
                    else {
                        this.setState({ isLoading: false })

                    }
                }).catch(err => { })

        } catch (err) {

        }
    }


    // getCommentList = 
    getCommentList = () => {
        try {

            let req = {
                ticketId: this.props.match.params.id
            }
            _ticketCommentList(req)
                .then(resp => {
                    if (resp.status) {
                        this.setState({ ticketCommentInfo: resp.result, isLoading: false })
                    }
                    else {
                        this.setState({ isLoading: false })

                    }
                }).catch(err => { })

        } catch (err) {

        }

    }







    handleSubmit = () => {
        try {
            if (this.state.comment == "") {
                this.setState({ commentError: "*Please enter comment " })
            }
          

            else {
                this.setState({ isLoading: true })
                let formData = new FormData();
                formData.append("ticket_id", this.props.match.params.id)
                formData.append("comment", this.state.comment)               

                _addComment(formData)
                    .then(resp => {
                        if (resp.status) {
                            notify("success", "Added")
                            this.setState({ isLoading: false, comment:'', commentError:'' })
                            this.getCommentList()
                            
                        }

                        else {
                            this.setState({ isLoading: false })
                            // notify("err", resp.Message)
                        }

                    }).catch(err=>  this.setState({ isLoading: false }))
            }
        } catch (err) {
            this.setState({ isLoading: false })
        }

    }

    // handle on change
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, commentError:'' })

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
                                    <label> {this.props.allText && this.props.allText.heading_support_ticket_details}</label>
                                </h2>
                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            <div className="row form-section ">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_emailid"><strong>{this.props.allText && this.props.allText.title_request}*</strong></label>

                                                        <p>{this.state.ticketInfo && this.state.ticketInfo.ticket_title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-section ">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_emailid"><strong>{this.props.allText && this.props.allText.title_description}*</strong></label>
                                                        <p>{<p>{this.state.ticketInfo && this.state.ticketInfo.message}</p>}</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row form-section ">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="merchant_emailid"><strong>{this.props.allText && this.props.allText.title_add_comment}*</strong></label>
                                                        <textarea
                                                            type="email"
                                                            id="merchant_emailid"
                                                            name="comment"
                                                            className="form-control"
                                                            required
                                                            value = {this.state.comment}
                                                            placeholder={this.props.allText && this.props.allText.enter_comment}
                                                            onChange={this.handleOnChange}

                                                        />
                                                        <InlineError
                                                            message={this.state.commentError}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form_row">
                                                <div className="col-md-8">
                                                    <div className="form-group form_bottom_btns">
                                                        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">{this.props.allText && this.props.allText.txt_submit} →</button>
                                                    </div>
                                                </div>
                                            </div>


                                            <section className="">
                                                <div className="container">

                                                    <div className="row justify-content-md-end page-content-wraper">
                                                        <div className="col-lg-11 col-offset-1">
                                                            <h2 className="page-title">
                                                                <label> {this.props.allText && this.props.allText.txt_history}</label>
                                                            </h2>
                                                            <div className="gap-1"></div>
                                                            <div className="recent-activity">
                                                                <div className="table-responsive">
                                                                    <table className="table table-borderless list-table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">{this.props.allText && this.props.allText.sl_no}</th>
                                                                                <th scope="col">{this.props.allText && this.props.allText.list_title}</th>
                                                                                <th scope="col">{this.props.allText && this.props.allText.txt_added_date}</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                this.state.ticketCommentInfo && this.state.ticketCommentInfo.map((item, index) => (
                                                                                    <tr key={index}>
                                                                                        <th scope="row">{index + 1}</th>
                                                                                        <td>{item.comment}</td>
                                                                                        <td>{new Date(item.created_date).toLocaleDateString()}</td>
                                                                                    </tr>
                                                                                ))
                                                                            }

                                                                        </tbody>
                                                                        {
                                                                            !this.state.isLoading && this.state.ticketCommentInfo.length == 0 && <p style = {{marginTop:"10"}}>{this.props.allText && this.props.allText.no_more_comment}</p>
                                                                        }
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>












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


export default connect(mapStateToProps)(ViewTicket);



