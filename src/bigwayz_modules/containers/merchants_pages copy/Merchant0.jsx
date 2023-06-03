/**
 * 
 * @about Dashboard or this file
 *  dashboard or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";
import Merchant0 from "../../components/merchant/Merchant0";




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
               
                <Merchant0 
                    {...this.props}
                />            
            </>

        )
    }
}

export default Merchant;

