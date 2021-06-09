import RoutingContainer from '../containers/routing-container';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './app.theme';

import NotificationProvider from '../common/context/notificationContext';
import UpdateCurrentUserProvider from '../common/context/updateCurrentUserContext';

import { GET_ACTIVE_THEME } from '../graphql/theme';
import { GET_CURRENT_USER } from '../graphql/user';
import useQueriedData from '../common/hooks/useQueriedData';

const App = () => {
    const { data } = useQueriedData(GET_ACTIVE_THEME);
    const { refetch } = useQueriedData(GET_CURRENT_USER);

    const updateUsers = () => {
        refetch();
    };

    const activeTheme = data.activeTheme;

    return (
        <ThemeProvider theme={theme[activeTheme]}>
            <NotificationProvider>
                <UpdateCurrentUserProvider value={updateUsers}>
                    <RoutingContainer />
                </UpdateCurrentUserProvider>
            </NotificationProvider>
        </ThemeProvider>
    );
};

export default App;
