import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../graphql/auth';
import { LogoutDiv } from './logout.style';
import { useNotificationService } from '../../common/context/notificationContext';

const Logout = () => {
    const [logout, { data }] = useMutation(LOGOUT);

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const response = data.logout;
            if (response.success) {
                window.location.reload();
            } else {
                notify({ text: 'Oops! Something went wrong', type: 'fail' });
            }
        }
    }, [data]);

    const logoutHandler = async () => {
        await logout();
    };

    return <LogoutDiv onClick={logoutHandler} />;
};

export default Logout;
