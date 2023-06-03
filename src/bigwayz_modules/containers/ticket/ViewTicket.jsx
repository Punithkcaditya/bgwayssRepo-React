/**
 * 
 * @about ADDTicket or this file
 *  ADDTicket or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import ViewTickett from "../../components/ticket/ViewTicket";


// ADDTicket className
class ViewTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <ViewTickett 
                 {...this.props}
                />

            </>

        )
    }
}

export default ViewTicket;

