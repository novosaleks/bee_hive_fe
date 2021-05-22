import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/user';
const ContactsContext = React.createContext();

export function useContacts() {
    return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [avaliableContacts, setAvaliableContacts] = useState([]);

    // const handleClickSearch = (user) => {
    //     setAvaliableContacts((prevAvaliableContacts) =>
    //         prevAvaliableContacts.includes(user)
    //             ? prevAvaliableContacts
    //             : [...prevAvaliableContacts, user]
    //     );
    //     setSearchTerm('');
    // };
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const avaliableContacts = data.getAllUsers;
    console.log();

    return (
        <ContactsContext.Provider value={avaliableContacts}>
            {children}
        </ContactsContext.Provider>
    );
}
