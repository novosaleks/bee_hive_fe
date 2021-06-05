import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../graphql/auth';
import { LogoutDiv } from './logout.style';

const Logout = () => {
    const [logout, { data }] = useMutation(LOGOUT);

    useEffect(() => {
        if (data) {
            const response = data.logout;
            if (response.success) {
                // TODO add a notification
                console.log(response.message);
                window.location.reload();
            } else {
                // TODO add a notification
                console.error(response.message);
            }
        }
    }, [data]);

    const logoutHandler = async () => {
        await logout();
    };

    return <LogoutDiv onClick={logoutHandler} />;
};

export default Logout;
