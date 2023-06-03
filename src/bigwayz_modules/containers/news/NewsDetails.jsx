/**
 * 
 * @about NewsDetails or this file
 *  NewsDetails or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import NewsDetailss from "../../components/news/NewsDetails";




// NewsDetails className
class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <NewsDetailss
                    {...this.props}
                />


            </>

        )
    }
}

export default NewsDetails;

