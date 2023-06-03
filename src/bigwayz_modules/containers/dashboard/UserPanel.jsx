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
import UserPanel from "../../components/dashboard/UserPanel";




// dashboard className
class UserPanelDashboard extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <>
                
                <UserPanel
                 {...this.props}
                />            
            </>

        )
    }
}

export default UserPanelDashboard;

