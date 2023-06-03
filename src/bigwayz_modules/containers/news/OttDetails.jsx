/**
 * 
 * @about OttDetails or this file
 *  OttDetails or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import OttDetailss from "../../components/news/OttDetails";

// OttDetails className
class OttDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <OttDetailss
                    {...this.props}
                />


            </>

        )
    }
}

export default OttDetails;

