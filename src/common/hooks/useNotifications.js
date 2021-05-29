import { useEffect, useState } from 'react';
import Portal from '../../containers/portal';
import Notification from '../../components/notification';

export const useNotifications = () => {
    const [notificationParams, setNotificationParams] = useState({});

    const timeout = 3500;

    const { text, type } = notificationParams;

    useEffect(() => {
        if (text) {
            const id = setTimeout(() => {
                setNotificationParams({});
            }, 30000);

            return () => clearTimeout(id);
        }
    }, [text]);

    const element = text ? (
        <Portal>
            <Notification type={type} timeout={timeout}>{text}</Notification>
        </Portal>
    ) : null;

    return [element, setNotificationParams];
};

export default useNotifications;
