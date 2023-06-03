/**
 * 
 * @about TicketList or this file
 *  TicketList or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import List from "../../components/ticket/TicketList";


// TicketList className
class TicketList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <List 
                 {...this.props}
                />

            </>

        )
    }
}

export default TicketList;

