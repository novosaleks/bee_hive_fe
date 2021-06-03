import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { cache } from './cache';
import GlobalStyles from './index.style';

const link = createUploadLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
});

const client = new ApolloClient({ link, cache });

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);
