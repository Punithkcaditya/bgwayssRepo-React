/**
 * @about SideBar or this file
 * common SideBar file all screen
 * public and private access
 *
 * 
  */


// lib
import React, { Component } from "react";
import {
    Link
} from 'react-router-dom';

// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"


import {
    _getSideMenuData
} from "../../config/api/Api";
// // loader
// import Loader from "../common/Loader";



// SideBar class
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenuData: []

        };
    }

    componentDidMount() {
           this.getSideData()
    }


    // api for get side bar data
    getSideData = () => {
        try {
            _getSideMenuData()
                .then(resp => {
                    if (resp.success) {
                        this.setState({ sideMenuData: resp.data })
                    }
                })
                .catch(err => { })

        } catch (err) {

        }
    }



    render() {
        const ststusHref = this.props.checkLoggedIn && this.props.checkLoggedIn.customer_active == 2
        return (
            <>
                <div className="vertical-menu">
                    <ul>

                        {
                            this.state.sideMenuData && this.state.sideMenuData.map((item, index) => (
                                <li key={index}> <a href={ststusHref ? item.description.service_link : ''} target="_blank"> <i className="fas fa-credit-card"> </i> <span>{item.description.service_name}</span></a></li>

                            ))
                        }
                        
                        
                        <li > <Link to={"/profile"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_profile}</span></Link></li>
                        <li > <Link to={"/agreement"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_customer_agreement}</span></Link></li>
                        <li > <Link to={"/changepassword"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_change_password}</span></Link></li>
                        <li > <Link to={"/invite"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.leftmenu_inviteuser}</span></Link></li>
                        <li > <Link to={"/tree"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && 'My tree'}</span></Link></li>
                        <li > <Link to={"/customer/registration"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_customer_register}</span></Link></li>
                        <li > <Link to={"/balance/history"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_transaction}</span></Link></li>
                        <li > <Link to={"/tickets"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.left_menu_ticket}</span></Link></li>                       
                        <li > <Link to={"/news"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_news}</span></Link></li>
                        <li > <Link to={"/ott"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_ott}</span></Link></li>
                        <li > <Link to={"/dashboard"}> <i className="fas fa-credit-card"> </i> <span>{this.props.allText && this.props.allText.menu_faq}</span></Link></li>

                    </ul>
                </div>


            </>
        )
    }

   
}


const mapStateToProps = state => {
    return {
        ...state,
        allText: state.getTextContent.allText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({  }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);



