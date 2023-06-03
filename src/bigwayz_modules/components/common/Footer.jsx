/**
 * @about Footer or this file
 * common footer file all screen
 * public and private access
 *
 * 
 */


// lib
import React, { Component } from "react";

// footer class
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <section className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <img src={require("../../assets/img/mobile-f.png")} className="mobile" />
                            </div>
                            <div className="col-sm-6 text-left">
                                <p>Inginomicx Technologies Pvt Limited,<br/>
                                    102, Eden Park, No.20, Vittal Mallya Rs.,<br />
                                    Bangalore, Karnataka-560001<br />
                                    Contact No : 080-49 01 64 39<br />
                                    Web : www.bigwayz.com </p>
                                    <ul>
                                        <li><a href="https://twitter.com/" title="twitter"><img src={require("../../assets/img/twitter.png")} /></a></li>
                                        <li><a href="https://www.facebook.com/" title="facebook"><img src={require("../../assets/img/facebook.png")} /></a></li>
                                        <li><a href="https://www.instagram.com/" title="instagram"><img src={require("../../assets/img/instagram.png")} /></a></li>
                                        <li><a href="https://www.whatsapp.com/" title="whatsapp"><img src={require("../../assets/img/whatsapp.png")} /></a></li>
                                    </ul>
                            </div>
                            </div>
                        </div>
                </section>
            </>

                )
            }
        }
        
        export default Footer;
        
