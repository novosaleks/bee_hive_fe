import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../graphql/auth';
import { LogoutDiv } from './logout.style';

const Logout = () => {
    const [logout, { data }] = useMutation(LOGOUT);

    useEffect(() => {
        if (data) {
            const success = data.logout;
            if (success) {
                window.location.reload();
            }
        }
    }, [data]);

    const logoutHandler = async () => {
        await logout();
    };

    return <LogoutDiv onClick={logoutHandler} />;
};

export default Logout;
