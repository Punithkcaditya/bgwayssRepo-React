/**
 * @about Footer or this file
 * common footer file all screen
 * public and private access
 *
 * 
 */


// lib
import React, { Component } from "react";

// footer className
class Footer2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <section className="footer2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div class="credits">
                                    <label>Designed & Developed By &nbsp;</label>
                                    <a href="https://superiorcodelabs.com/" target="_blank"> <img src="https://superiorcodelabs.com/assets/images/superior_codelabs_logo.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </>

        )
    }
}

export default Footer2;

