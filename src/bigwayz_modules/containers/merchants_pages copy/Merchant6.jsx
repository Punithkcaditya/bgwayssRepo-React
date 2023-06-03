/**
 * 
 * @about Dashboard or this file
 *  dashboard or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import Merchant6 from "../../components/merchant/Merchant6";




// dashboard className
class Merchant extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <Merchant6
                {...this.props}
                />            
            </>

        )
    }
}

export default Merchant;

