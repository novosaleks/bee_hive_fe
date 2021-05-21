import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import LoginScreen from "../../../pages/login-screen";
import RegisterScreen from "../../../pages/register-screen";

const Unauthorized = ({user}) => {
    return (
        !user ?
            <Switch>
                <Route path='/login' exact>
                    <LoginScreen/>
                </Route>
                <Route path='/register' exact>
                    <RegisterScreen/>
                </Route>
            </Switch>
            : <Redirect to='/'/>
    )
}

export default Unauthorized;
