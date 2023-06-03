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
import Dashboardd from "../../components/dashboard/Dashboard";




// dashboard className
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <Dashboardd
                    {...this.props}
                />


            </>

        )
    }
}

export default Dashboard;

