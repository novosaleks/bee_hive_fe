import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavbarContainer from '../../navbar-container';
import ProfileScreen from '../../../pages/profile-screen';
import SettingsScreen from '../../../pages/settings-screen';
import NewsScreen from '../../../pages/news-screen';
import SubscriptionScreen from '../../../pages/subscription-screen';

const User = ({ user }) => {
    return (
        user ?
            <Switch>
                <Route path='/' exact>
                    <NavbarContainer />
                    <ProfileScreen />
                </Route>
                <Route path='/settings' exact>
                    <NavbarContainer />
                    <SettingsScreen />
                </Route>
                <Route path='/news' exact>
                    <NavbarContainer />
                    <NewsScreen />
                </Route>
                <Route path='/subscription' exact>
                    <NavbarContainer />
                    <SubscriptionScreen />
                </Route>
            </Switch>
            : <Redirect to='/login' />
    );
};

export default User;
