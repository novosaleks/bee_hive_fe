import UnauthorizedRoute from './routes/unauthorizedRoute';
import UserRoute from './routes/userRoute';
import { GET_CURRENT_USER } from '../../graphql/user';
import { Redirect, Switch } from 'react-router-dom';
import ProfileScreen from '../../pages/profile-screen';
import NavbarContainer from '../navbar-container';
import SettingsScreen from '../../pages/settings-screen';
import NewsScreen from '../../pages/news-screen';
import SubscriptionScreen from '../../pages/subscription-screen';
import MessagesScreen from '../../pages/messages-screen';
import LoginScreen from '../../pages/login-screen';
import RegisterScreen from '../../pages/register-screen';
import ErrorContainer from '../error-container';
import useQueriedData from '../../common/hooks/useQueriedData';

const RoutingContainer = () => {
    const [data, fallback] = useQueriedData(GET_CURRENT_USER);

    if (fallback) {
        return fallback;
    }

    const user = data.currentUser;

    const UserRouteContainer = props => {
        const { children, ...componentProps } = props;

        return (
            <UserRoute {...componentProps} isAuthorized={!!user}>
                {children}
            </UserRoute>
        );
    };

    const UnauthorizedRouteContainer = props => {
        const { children, ...componentProps } = props;

        return (
            <UnauthorizedRoute {...componentProps} isAuthorized={!!user}>
                {children}
            </UnauthorizedRoute>
        );
    };

    return (
        <Switch>
            <UnauthorizedRouteContainer exact path='/login'>
                <LoginScreen />
            </UnauthorizedRouteContainer>
            <UnauthorizedRouteContainer exact path='/register'>
                <RegisterScreen />
            </UnauthorizedRouteContainer>
            <UserRouteContainer exact path='/'>
                <Redirect to={`/user/${user?.id}`} />
            </UserRouteContainer>
            <UserRouteContainer exact path='/user/:userId'>
                <NavbarContainer />
                <ProfileScreen />
            </UserRouteContainer>
            <UserRouteContainer exact path='/settings'>
                <NavbarContainer />
                <SettingsScreen />
            </UserRouteContainer>
            <UserRouteContainer exact path='/news'>
                <NavbarContainer />
                <NewsScreen />
            </UserRouteContainer>
            <UserRouteContainer exact path='/messages'>
                <NavbarContainer />
                <MessagesScreen />
            </UserRouteContainer>
            <UserRouteContainer exact path='/subscription'>
                <Redirect to={`/subscription/${user?.id}`} />
            </UserRouteContainer>
            <UserRouteContainer exact path='/subscription/:userId'>
                <NavbarContainer />
                <SubscriptionScreen />
            </UserRouteContainer>
            <ErrorContainer type={'not found'} />
        </Switch>
    );
};

export default RoutingContainer;
