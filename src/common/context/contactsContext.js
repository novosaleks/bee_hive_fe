import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/user';
const ContactsContext = React.createContext();

export const useContacts = () => {
    return useContext(ContactsContext);
};

export const ContactsProvider = ({ children }) => {
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const avaliableContacts = data.getAllUsers;

    return (
        <ContactsContext.Provider value={avaliableContacts}>
            {children}
        </ContactsContext.Provider>
    );
};
