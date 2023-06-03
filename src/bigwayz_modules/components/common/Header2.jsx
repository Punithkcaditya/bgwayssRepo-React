/**
 * @about Header or this file
 * common header file all screen
 * public and private access
 *
 * 
  */
// lib
import React, { Component } from "react";
// roucting lib
import {
    Link
} from 'react-router-dom';

// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"
// actions
import { getAllGlobalText } from "../../redux/actions/Text";
import { history } from "../../../App";
// api services
import { _logout } from "../../config/api/Api";
// loader
import Loader from "../common/Loader";
// notify
import { notify } from "../../components/common/Toaster";
// 
import { Dropdown, Modal, Button, ModalFooter, ModalBody } from 'react-bootstrap';


// header class
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowLogOutModal: false,
            isLoading: false

        };
    }



    // click yess
    onClickYes = () => {
        this.setState({ isLoading: true })
        try {
            _logout()
                .then(resp => {
                    this.setState({ isLoading: false, ShowLogOutModal: false })
                    localStorage.clear()
                    history.push("/")

                })
                .catch(err => {
                    this.setState({ isLoading: false })
                    notify("err", "*Please try again.")
                })

        } catch (err) {
            this.setState({ isLoading: false })
            notify("err", "*Please try again.")
        }

    }

    // this function handle on click logout btn & log out the user
    handleOnLogOutClick = () => {
        this.setState({ ShowLogOutModal: !this.state.ShowLogOutModal })


    }



    render() {
        return (
            <>
                {this.state.isLoading && <Loader />}
                <header id="header">
                    <nav className="navbar navbar-expand-lg navbar-light top-navbar sticky is-sticky" data-toggle="sticky-onscroll">
                        <div className="container-fluid">
                            <div className="mobile_nav_btn">
                                <span><i className="fas fa-bars"></i></span>
                            </div>
                            <Link className="navbar-brand" to={"/"}><img src={require("../../assets/img/Bigwayzlogo.png")} className="logo" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {
                                this.props.isShow &&
                                <>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                        <ul className="navbar-nav pull-right">
                                            <li className="nav-item">
                                                <div className="user_account" style={{ cursor: 'pointer' }}>
                                                    <div className="nav-link" onClick={() => this.props.history.push("/profile")} href=""><i className="far fa-user"></i>&nbsp;&nbsp; {this.props.checkLoggedIn && this.props.checkLoggedIn.cust_name}</div>
                                                    <div style={{ cursor: 'pointer' }} onClick={() => this.setState({ ShowLogOutModal: true })} className="nav-link" href=""><i className="fas fa-power-off"></i></div>
                                                </div>
                                                <div className="credit_balance">
                                                    <p><strong><i className="fas fa-coins"></i>&nbsp;&nbsp; {this.props.allText && this.props.allText.txt_balance}: </strong> {this.props.checkLoggedIn.credits && this.props.checkLoggedIn.credits.available_credits}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile_navlink">
                                        <div className="nav-link user" onClick={() => this.props.history.push("/profile")} ><i className="far fa-user"></i></div>
                                        <div onClick={() => this.setState({ ShowLogOutModal: true })} className="nav-link logout" ><i className="fas fa-power-off"></i></div>
                                    </div>
                                </>
                            }
                        </div>
                    </nav>
                </header>

                <Modal show={this.state.ShowLogOutModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.allText && this.props.allText.txt_logout}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.allText && this.props.allText.sure_to_logout}</Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-default  btn-sm mR-20" variant="secondary" onClick={this.handleOnLogOutClick}>{this.props.allText && this.props.allText.txt_no}</button>
                        <button className="btn btn-primary btn-sm btn-blue" variant="primary" onClick={this.onClickYes}>{this.props.allText && this.props.allText.txt_yes}</button>
                    </Modal.Footer>
                </Modal>


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

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ getAllGlobalText }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



