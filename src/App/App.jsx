import React, { useEffect } from 'react';
import RoutingContainer from '../containers/routing-container';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './app.theme';
import useNotifications from '../common/hooks/useNotifications';

import NotificationProvider from '../common/context/notificationContext';

const App = () => {

    const [notification, setNotification] = useNotifications();

    const notify = ({ text, type = 'success' }) => {
        const props = { text, type };

        setNotification(props);
    };

    return (
        <ThemeProvider theme={theme.light}>
            <NotificationProvider value={notify}>
                {notification}
                <RoutingContainer />
            </NotificationProvider>
        </ThemeProvider>
    );
};

export default App;
