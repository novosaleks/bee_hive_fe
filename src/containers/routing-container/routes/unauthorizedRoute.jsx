import { Redirect, Route } from 'react-router-dom';

const UnauthorizedRoute = (props) => {
    const { isAuthorized, children, ...routeProps } = props;

    return (
        <Route {...routeProps}>
            {() => !isAuthorized ? children : <Redirect to='/' />}
        </Route>
    );
};

export default UnauthorizedRoute;
