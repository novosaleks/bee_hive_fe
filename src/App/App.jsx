import RoutingContainer from '../containers/routing-container';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './app.theme';
import useNotifications from '../common/hooks/useNotifications';

import NotificationProvider from '../common/context/notificationContext';
import UpdateCurrentUserProvider from '../common/context/updateCurrentUserContext';

import { useQuery } from '@apollo/client';
import { GET_ACTIVE_THEME } from '../graphql/theme';
import { GET_CURRENT_USER } from '../graphql/user';
import Portal from '../containers/portal';

const App = () => {
    const { data } = useQuery(GET_ACTIVE_THEME);
    const { refetch } = useQuery(GET_CURRENT_USER);

    const [notification, setNotification] = useNotifications();

    const notify = ({ text, type }) => {
        const props = { text, type };

        setNotification(props);
    };

    const updateUsers = () => {
        refetch();
    };

    const activeTheme = data.activeTheme;

    return (
        <ThemeProvider theme={theme[activeTheme]}>
            <NotificationProvider value={notify}>
                <Portal id='notification'>
                    {notification}
                </Portal>
                <UpdateCurrentUserProvider value={updateUsers}>
                    <RoutingContainer />
                </UpdateCurrentUserProvider>
            </NotificationProvider>
        </ThemeProvider>
    );
};

export default App;
