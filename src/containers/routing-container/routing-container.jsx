import UnauthorizedRoute from './routes/unauthorizedRoute';
import UserRoute from './routes/userRoute';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';
import { Switch } from 'react-router-dom';
import ProfileScreen from '../../pages/profile-screen';
import NavbarContainer from '../navbar-container';
import SettingsScreen from '../../pages/settings-screen';
import NewsScreen from '../../pages/news-screen';
import SubscriptionScreen from '../../pages/subscription-screen';
import MessagesScreen from '../../pages/messages-screen';
import LoginScreen from '../../pages/login-screen';
import RegisterScreen from '../../pages/register-screen';
import NotFound from '../../pages/not-found';

const RoutingContainer = () => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;

    const user = data.currentUser;

    const UserRouteComponent = props => {
        const { children, ...componentProps } = props;

        return (
            <UserRoute {...componentProps} isAuthorized={!!user}>
                {children}
            </UserRoute>
        );
    };

    const UnauthorizedRouteComponent = props => {
        const { children, ...componentProps } = props;

        return (
            <UnauthorizedRoute {...componentProps} isAuthorized={!!user}>
                {children}
            </UnauthorizedRoute>
        );
    };

    return (
        <Switch>
            <UnauthorizedRouteComponent exact path='/login'>
                <LoginScreen />
            </UnauthorizedRouteComponent>
            <UnauthorizedRouteComponent exact path='/register'>
                <RegisterScreen />
            </UnauthorizedRouteComponent>
            <UserRouteComponent exact path='/'>
                <NavbarContainer />
                <ProfileScreen />
            </UserRouteComponent>
            <UserRouteComponent exact path='/settings'>
                <NavbarContainer />
                <SettingsScreen />
            </UserRouteComponent>
            <UserRouteComponent exact path='/news'>
                <NavbarContainer />
                <NewsScreen />
            </UserRouteComponent>
            <UserRouteComponent exact path='/messages'>
                <NavbarContainer />
                <MessagesScreen />
            </UserRouteComponent>
            <UserRouteComponent exact path='/subscription'>
                <NavbarContainer />
                <SubscriptionScreen />
            </UserRouteComponent>
            <NotFound />
        </Switch>
    );
};

export default RoutingContainer;
