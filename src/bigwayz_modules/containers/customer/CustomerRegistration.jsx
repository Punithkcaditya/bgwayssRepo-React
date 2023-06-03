/**
 * 
 * @about CutomerRegister or this file
 *  CutomerRegister or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import CutomerRegisterd from "../../components/customer/CustomerRegistration";




// CutomerRegister className
class CutomerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <CutomerRegisterd
                    {...this.props}
                />


            </>

        )
    }
}

export default CutomerRegister;

