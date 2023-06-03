/**
 * 
 * @about ChangePassword or this file
 *  ChangePassword or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import ChangePasswordd from "../../components/auth/ChangePassword"




// ChangePassword className
class ChangePassword extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <>
                
                <ChangePasswordd
                 {...this.props}
                />            
            </>

        )
    }
}

export default ChangePassword;

