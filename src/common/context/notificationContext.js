import { createContext, useContext } from 'react';

const NotificationContext = createContext(null);

export const useNotificationService = () => useContext(NotificationContext);

export default NotificationContext.Provider;
