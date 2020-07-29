import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/auth/PrivateRoute";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Main from "../pages/Main";
import { userContext } from "../Context/Context";
import firebaseConfig from "../config/firebaseConfig";
// fireBase
import firebase from "firebase/app";
import "firebase/auth";
import { isAuthenticate } from "../components/auth";

// initialise firebase
firebase.initializeApp(firebaseConfig);

const Routes = () => {
  const [user, setUser] = useState(isAuthenticate());

  return (
    <Router>
      <userContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <PrivateRoute exact path='/' component={Main} />
        </Switch>
      </userContext.Provider>
    </Router>
  );
};

export default Routes;
