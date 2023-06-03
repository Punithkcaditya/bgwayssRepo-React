

import React, { Component } from 'react';

// roucting lib
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import { Spinner } from 'react-bootstrap';
// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"
// // actions
// import { getTextContent } from "../redux/actions/Text";
// actions
import { loginCheck } from "../redux/actions/Auth"

// cmp & pages
import Header from "../components/common/Header2";
import SideBar from "../components/common/SideBar"
import Footer from "../components/common/Footer";
import UserPanel from "../components/dashboard/UserPanel";
import Merchant0 from "../containers/merchants_pages/Merchant0";
import Merchant1 from "../containers/merchants_pages/Merchant1";
import Merchant2 from "../containers/merchants_pages/Merchant2";
import Merchant3 from "../containers/merchants_pages/Merchant3";
import Merchant4 from "../containers/merchants_pages/Merchant4";
import Merchant5 from "../containers/merchants_pages/Merchant5";
import Merchant6 from "../containers/merchants_pages/Merchant6";
import Home from "../containers/home/Home";
import Dashboard from "../components/dashboard/Dashboard"
import Balancehistory from "../containers/balance_history/BalanceHistory"
import Profile from "../containers/profile/Profile"
import CutomerRegister from '../containers/customer/CustomerRegistration';
import News from '../containers/news/News';
import NewsDetails from '../containers/news/NewsDetails';
import Ott from '../containers/news/Ott';
import OttDetails from '../containers/news/OttDetails';
import ChangePassword from '../containers/auth/ChangePassword';
import AddTicket from '../containers/ticket/AddTicket';
import TicketList from '../containers/ticket/TicketList';
import ViewTicket from '../components/ticket/ViewTicket';
import InviteSection from '../containers/ticket/Invite';
import Aggrement from '../containers/aggrement/Aggrement';
import MyTree from '../containers/tree/Tree'





// layout





export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentDidMount() {
        this.props.action.loginCheck();
    }


    render() {



        return (
            <>
                <Header
                    {...this.props}
                    isShow={true}
                />
                {
                    this.props.checkLoggedIn.customer_active == 2 &&
                    <SideBar
                        {...this.props}
                    />
                }
                
                {

                    this.props.checkLoggedIn.customer_active == undefined ?
                        <center>
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </center> :
                        this.props.checkLoggedIn && this.props.checkLoggedIn.customer_active == 0 ?
                            <Switch>
                                <Route exact path="/dashboard" component={UserPanel} />
                                <Route exact path="/changepassword" component={ChangePassword} />
                                <Route exact path="/verification" component={Merchant0} />
                                <Route exact path="/basic/Details" component={Merchant1} />
                                <Route exact path="/business/Details" component={Merchant2} />
                                <Route exact path="/package/selection" component={Merchant3} />
                                <Route exact path="/bank/account" component={Merchant4} />
                                <Route exact path="/business/information" component={Merchant5} />
                                <Route exact path="/kyc/upload" component={Merchant6} />
                                <Route exact path="/addticket" component={AddTicket} />
                                <Route exact path="/tickets" component={TicketList} />
                                <Route exact path="/ticket/:id" component={ViewTicket} />
                                <Route exact path="/invite" component={InviteSection} />
                                <Route exact path="/tree" component={MyTree} />
                            </Switch>
                            :

                            this.props.checkLoggedIn && this.props.checkLoggedIn.customer_active == 1 ?
                                <Switch>
                                    <Route exact path="/dashboard" component={Home} />
                                    <Route exact path="/changepassword" component={ChangePassword} />
                                </Switch>

                                :
                                <Switch>
                                    <Route exact path="/dashboard" component={Dashboard} />
                                    <Route exact path="/changepassword" component={ChangePassword} />
                                    <Route exact path="/balance/history" component={Balancehistory} />
                                    <Route exact path="/profile" component={Profile} />
                                    <Route exact path="/news" component={News} />
                                    <Route exact path="/news/:id" component={NewsDetails} />
                                    <Route exact path="/ott" component={Ott} />
                                    <Route exact path="/ott/:id" component={OttDetails} />
                                    <Route exact path="/customer/registration" component={CutomerRegister} />
                                    <Route exact path="/addticket" component={AddTicket} />
                                    <Route exact path="/tickets" component={TicketList} />
                                    <Route exact path="/ticket/:id" component={ViewTicket} />
                                    <Route exact path="/invite" component={InviteSection} />
                                    <Route exact path="/agreement" component={Aggrement} />
                                    <Route exact path="/tree" component={MyTree} />
                                </Switch>
                }

            </>
        );

    }
}


const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ loginCheck }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);


