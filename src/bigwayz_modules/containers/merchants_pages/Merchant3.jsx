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
import Merchant3 from "../../components/merchant/Merchant3";




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
                <Merchant3 {...this.props} />            
            </>

        )
    }
}

export default Merchant;

