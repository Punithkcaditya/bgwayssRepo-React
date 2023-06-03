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
import Home from "../../components/home/Home"




// dashboard className
class HomeDashboard extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <>
                
                <Home
                 {...this.props}
                />            
            </>

        )
    }
}

export default HomeDashboard;

