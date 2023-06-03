// lib
import React from 'react';
// roucting lib
// import {
//   Router,
//   Route,
//   Switch,
//   Redirect
// } from 'react-router-dom';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider component

import { Switch } from 'react-router-dom';



// history
import { createBrowserHistory } from 'history';
// custome components & pages & screens
// import Dashboard from "./bigwayz_modules/containers/dashboard/Dashboard";
import Login from "./bigwayz_modules/containers/auth/Login";
import Signup from "./bigwayz_modules/containers/auth/SignUp";
import ForgotPassword from "./bigwayz_modules/containers/auth/ForgotPassword";
// layout
import Layout from "./bigwayz_modules/layout/Layout"
// actions
import {  getAllGlobalText } from "./bigwayz_modules/redux/actions/Text";
// store
import Store from "./bigwayz_modules/redux/store/Store";

import UserPanel from "./bigwayz_modules/components/dashboard/UserPanel";
import Merchant0 from "./bigwayz_modules/components/merchant/Merchant0";
import Merchant1 from "./bigwayz_modules/components/merchant/Merchant1";
import Merchant2 from "./bigwayz_modules/components/merchant/Merchant2";
import Merchant3 from "./bigwayz_modules/components/merchant/Merchant3";
import Merchant4 from "./bigwayz_modules/components/merchant/Merchant4";
import Merchant5 from "./bigwayz_modules/components/merchant/Merchant5";
import Merchant6 from "./bigwayz_modules/components/merchant/Merchant6";



// create history & listen
export const history = createBrowserHistory();
history.listen(({ pathname }) => {
  window.scrollTo(0, 0)
})

Store.dispatch(getAllGlobalText())

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn === true ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/", state: { from: props.location } }}
            />
          )
      }
    />
  )
}



function App() {
  return (
    <Provider store={Store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route  path="/signup" component={Signup} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/home" component={Layout} />
        <Route exact path="/dashboard" component={Layout} />
        <Route exact path="/verification" component={Layout} />
        <Route exact path="/changepassword" component={Layout} />
        <Route exact path="/basic/Details" component={Layout} />
        <Route exact path="/business/Details" component={Layout} />
        <Route exact path="/package/selection" component={Layout} />
        <Route exact path="/bank/account" component={Layout} />
        <Route exact path="/business/information" component={Layout} />
        <Route exact path="/kyc/upload" component={Layout} />
        <Route exact path="/balance/history" component={Layout} />
        <Route exact path="/profile" component={Layout} />
        <Route exact path="/addticket" component={Layout} />
        <Route exact path="/ticket/:id" component={Layout} />
        <Route exact path="/tickets" component={Layout} />
        <Route exact path="/customer/registration" component={Layout} />
        <Route exact path="/news" component={Layout} />
        <Route exact path="/news/:id" component={Layout} />        
        <Route exact path="/ott" component={Layout} />
        <Route exact path="/ott/:id" component={Layout} />
        <Route exact path="/invite" component={Layout} />
        <Route exact path="/agreement" component={Layout} />
        <Route exact path="/tree" component={Layout} />

        {/* <PrivateRoute
          exact
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/dashboard"
          component={UserPanel}
        />


        <PrivateRoute
      
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/verification"
          component={Merchant0}
        />

        <PrivateRoute
      
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/basic/Details"
          component={Merchant1}
        />

        <PrivateRoute
      
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/business/Details"
          component={Merchant2}
        />

        <PrivateRoute
      
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/package/selection"
          component={Merchant3}
        />

        <PrivateRoute
      
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/bank/account"
          component={Merchant4}
        />

        <PrivateRoute
      
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/business/information"
          component={Merchant5}
        />

        <PrivateRoute
      
          loggedIn={localStorage.getItem("isLoggedIn") == "true"}
          path="/kyc/upload"
          component={Merchant6}
        /> */}

 

      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
