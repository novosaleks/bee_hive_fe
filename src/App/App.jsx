import React from 'react';
import RoutingContainer from '../containers/routing-container';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './app.theme';

const App = () => {
    return (
        <ThemeProvider theme={theme.light}>
            <RoutingContainer/>
        </ThemeProvider>
    );
};

export default App;
