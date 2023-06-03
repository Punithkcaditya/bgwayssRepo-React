/**
 * 
 * @about Invite or this file
 *  Invite or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import InviteSection from "../../components/ticket/Invite";


// Invite className
class Invite extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <InviteSection 
                 {...this.props}
                />

            </>

        )
    }
}

export default Invite;

