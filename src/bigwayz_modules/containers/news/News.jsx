/**
 * 
 * @about News or this file
 *  News or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import Newss from "../../components/news/News";




// News className
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <Newss
                    {...this.props}
                />


            </>

        )
    }
}

export default News;

