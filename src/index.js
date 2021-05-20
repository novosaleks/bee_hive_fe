import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, createHttpLink } from '@apollo/client';
import { cache } from './cache';

const link = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
});

const client = new ApolloClient({ link, cache });

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);
