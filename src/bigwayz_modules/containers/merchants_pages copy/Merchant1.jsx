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
import Merchant1 from "../../components/merchant/Merchant1";




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
                <Merchant1
                 {...this.props}
                />            
            </>

        )
    }
}

export default Merchant;

