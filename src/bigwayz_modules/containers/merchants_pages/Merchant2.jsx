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
import Merchant2 from "../../components/merchant/Merchant2";




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
              
                <Merchant2 
                    {...this.props}
                />            
            </>

        )
    }
}

export default Merchant;

