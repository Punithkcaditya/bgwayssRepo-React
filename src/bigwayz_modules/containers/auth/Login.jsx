/**
 * 
 * @about Login or this file
 *  Login or login page
 * 
 * 
 */


// lib
import React, { Component } from "react";

import Header from "../../components/common/Header2";
import Footer from "../../components/common/Footer2";
import Login from "../../components/auth/Login";



// Login className
class Loginn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        
        
        return (
            <>
                {/* <Header /> */}
                <Login {...this.props} />
                {/* <Footer /> */}

            </>

        )
    }
}

export default Loginn;