/**
 * 
 * @about Login or this file
 *  Login or login page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import Header from "../../components/common/Header2";
import Footer from "../../components/common/Footer2";
import Signup from "../../components/auth/ Registration";




// Login className
class Signupp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        
        return (
            <>
                {/* <Header /> */}
                <Signup {...this.props} />
                {/* <Footer /> */}

            </>

        )
    }
}

export default Signupp;

