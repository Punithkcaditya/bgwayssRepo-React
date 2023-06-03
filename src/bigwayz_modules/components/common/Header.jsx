/**
 * @about Header or this file
 * common header file all screen
 * public and private access
 *
 * 
  */


// lib
import React, { Component } from "react";

// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"
// actions
import { getTextContent } from "../../redux/actions/Text";
// api services
import {  } from "../../config/api/Api";
// loader
import Loader from "../common/Loader";


// header class
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.action.getTextContent()
    }



    render() {
        return (
            <>
                <header id="header">


                    <nav className="navbar navbar-expand-lg navbar-light top-navbar sticky is-sticky" data-toggle="sticky-onscroll">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="userpanel.html"><img src={this.props.getTextContent && this.props.getTextContent.logo} className="logo" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav pull-right">
                                    {
                                        this.props.getTextContent.tmdheader && this.props.getTextContent.tmdheader.headermenu.map((item, index) => (
                                            <li className="nav-item" key={index}>
                                                <a className="nav-link" href={item.link}>{item.title}</a>
                                            </li>

                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>


            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ getTextContent }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



