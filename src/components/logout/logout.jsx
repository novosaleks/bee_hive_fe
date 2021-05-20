import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../graphql/auth';
import { LogoutDiv } from './logout.style';

const Logout = () => {
    const [logout, { data }] = useMutation(LOGOUT);
    const logoutHandler = () => {
        //  logout({
        //     variables: {},
        // });
    };
    return <LogoutDiv onClick={logoutHandler} />;
};

export default Logout;
