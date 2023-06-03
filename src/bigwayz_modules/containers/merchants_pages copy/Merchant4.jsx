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
import Merchant4 from "../../components/merchant/Merchant4";




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
                <Merchant4 {...this.props} />            
            </>

        )
    }
}

export default Merchant;

