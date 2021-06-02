import { Redirect, Route } from 'react-router-dom';

const UserRoute = (props) => {
    const { isAuthorized, children, ...routeProps } = props;

    return (
        <Route {...routeProps}>
            {() => isAuthorized ? children : <Redirect to='/login' />}
        </Route>
    );
};

export default UserRoute;
