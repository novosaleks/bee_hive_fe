import { useEffect, useState } from 'react';
import Notification from '../../components/notification';

const useNotifications = () => {
    const [notificationParams, setNotificationParams] = useState({});

    const timeout = 3500;

    const { text, type = 'info' } = notificationParams;

    useEffect(() => {
        if (text) {
            const id = setTimeout(() => {
                setNotificationParams({});
            }, timeout + 5000);

            return () => clearTimeout(id);
        }
    }, [text]);

    const element = text ? (
            <Notification type={type} timeout={timeout}>{text}</Notification>
    ) : null;

    return [element, setNotificationParams];
};

export default useNotifications;
