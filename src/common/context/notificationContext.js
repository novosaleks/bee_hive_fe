import { createContext, useContext } from 'react';
import useNotifications from '../hooks/useNotifications';

const NotificationContext = createContext(null);

export const useNotificationService = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useNotifications();

    const notify = ({ text, type }) => {
        const props = { text, type };

        setNotification(props);
    };

    return (
        <NotificationContext.Provider value={notify}>
            {notification}
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
