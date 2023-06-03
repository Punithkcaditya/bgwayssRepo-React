/**
 * 
 * @about BalanceHistory or this file
 *  BalanceHistory or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import BalanceHistoryd from "../../components/balance_history/BalanceHistory";


// BalanceHistory className
class BalanceHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <BalanceHistoryd 
                 {...this.props}
                />

            </>

        )
    }
}

export default BalanceHistory;

