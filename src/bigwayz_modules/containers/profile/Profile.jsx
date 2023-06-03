/**
 * 
 * @about Profile or this file
 *  Profile or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import ProfileUser from "../../components/profile/Profile";


// Profile className
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <ProfileUser 
                 {...this.props}
                />

            </>

        )
    }
}

export default Profile;

