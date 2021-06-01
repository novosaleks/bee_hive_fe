import { Redirect, Route, Switch } from 'react-router-dom';
import NavbarContainer from '../../navbar-container';
import ProfileScreen from '../../../pages/profile-screen';
import SettingsScreen from '../../../pages/settings-screen';
import NewsScreen from '../../../pages/news-screen';
import SubscriptionScreen from '../../../pages/subscription-screen';
import MessagesScreen from '../../../pages/messages-screen';

const User = ({ user }) => {
    return user ? (
        <Switch>
            <Route path='/' exact>
                <Redirect to={`/${user.id}`} />
            </Route>
            <Route path='/:userId'>
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
            <Route path='/messages' exact>
                <NavbarContainer />
                <MessagesScreen />
            </Route>
        </Switch>
    ) : (
        <Redirect to='/login' />
    );
};

export default User;
