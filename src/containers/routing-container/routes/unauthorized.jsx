import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from '../../../pages/login-screen';
import RegisterScreen from '../../../pages/register-screen';

const Unauthorized = ({ user }) => {
    return (
        !user && (
            <Switch>
                <Route path='/login' exact>
                    <LoginScreen />
                </Route>
                <Route path='/register' exact>
                    <RegisterScreen />
                </Route>
            </Switch>
        )
    );
};

export default Unauthorized;
