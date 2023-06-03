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
import TicketScreen from "../../components/ticket/AddTicket";


// ADDTicket className
class ADDTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <TicketScreen 
                 {...this.props}
                />

            </>

        )
    }
}

export default ADDTicket;

