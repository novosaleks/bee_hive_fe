import RoutingContainer from '../containers/routing-container';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './app.theme';
import useNotifications from '../common/hooks/useNotifications';

import NotificationProvider from '../common/context/notificationContext';

import { useQuery } from '@apollo/client';
import { GET_ACTIVE_THEME } from '../graphql/theme';

const App = () => {
    const { data } = useQuery(GET_ACTIVE_THEME);

    const [notification, setNotification] = useNotifications();

    const notify = ({ text, type }) => {
        const props = { text, type };

        setNotification(props);
    };

    const activeTheme = data.activeTheme;

    return (
        <ThemeProvider theme={theme[activeTheme]}>
            <NotificationProvider value={notify}>
                {notification}
                <RoutingContainer />
            </NotificationProvider>
        </ThemeProvider>
    );
};

export default App;
