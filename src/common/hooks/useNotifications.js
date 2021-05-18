import { useEffect, useState } from 'react';
import Portal from '../../containers/portal';
import Notification from '../../components/notification';

export const useNotifications = () => {
    const [notificationParams, setNotificationParams] = useState({});

    const {text, type} = notificationParams;

    useEffect(() => {
        if (text) {
            const id = setTimeout(() => {
                setNotificationParams({});
            }, 3000);

            return () => clearTimeout(id);
        }
    }, [text]);

    const element = text ?
        (
            <Portal>
                <Notification type={type}>
                    {text}
                </Notification>
            </Portal>
        ) :
        null;

    return [element, setNotificationParams];
};

export default useNotifications;
