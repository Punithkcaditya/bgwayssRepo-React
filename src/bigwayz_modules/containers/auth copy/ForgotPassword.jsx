/**
 * 
 * @about ForgotPasswordd or this file
 *  ForgotPasswordd or ForgotPasswordd page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import Header from "../../components/common/Header2";
import Footer from "../../components/common/Footer2";
import ForgotPassword from "../../components/auth/ForgotPassword";




// ForgotPasswordd className
class ForgotPasswordd extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <Header />
                <ForgotPassword {...this.props} />
                <Footer />

            </>

        )
    }
}

export default ForgotPasswordd;

