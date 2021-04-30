import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfileScreen from '../../pages/profile-screen';
import LoginScreen from '../../pages/login-screen';
import RegisterScreen from '../../pages/register-screen';
import SettingsScreen from '../../pages/settings-screen';
import NewsScreen from '../../pages/news-screen';
import SubscriptionScreen from '../../pages/subscription-screen';
import NavbarContainer from '../navbar-container';

const RoutingContainer = () => {
    return (
        <Switch>
            <Route path='/login' exact>
                <LoginScreen/>
            </Route>
            <Route path='/register' exact>
                <RegisterScreen/>
            </Route>
            <>
                <NavbarContainer/>
                <Route path='/' exact>
                    <ProfileScreen/>
                </Route>
                <Route path='/settings' exact>
                    <SettingsScreen/>
                </Route>
                <Route path='/news' exact>
                    <NewsScreen/>
                </Route>
                <Route path='/subscription' exact>
                    <SubscriptionScreen/>
                </Route>
            </>
            <h1>Page not found</h1>
        </Switch>
    );
};

export default RoutingContainer;
