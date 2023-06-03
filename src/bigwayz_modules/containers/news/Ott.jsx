/**
 * 
 * @about Ott or this file
 *  Ott or Ott page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import Otts from "../../components/news/Ott";




// Ott className
class Ott extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <Otts
                    {...this.props}
                />


            </>

        )
    }
}

export default Ott;

