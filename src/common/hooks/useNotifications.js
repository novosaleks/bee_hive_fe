import { useEffect, useState } from 'react';
import Notification from '../../components/notification';
import Portal from '../../containers/portal';

const useNotifications = () => {
    const [notificationParams, setNotificationParams] = useState({});

    const timeout = 3500;

    const { text, type = 'info' } = notificationParams;

    useEffect(() => {
        if (text) {
            const id = setTimeout(() => {
                setNotificationParams({});
            }, timeout);

            return () => clearTimeout(id);
        }
    }, [text]);

    const element = text ? (
        <Portal id='notification'>
            <Notification type={type} timeout={timeout}>{text}</Notification>
        </Portal>
    ) : null;

    return [element, setNotificationParams];
};

export default useNotifications;
