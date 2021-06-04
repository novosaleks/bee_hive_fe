import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

import SearchGlobal from '../search-global';
import AvailableContacts from '../available-contacts';

import { SearchModalInput } from './search-users.style';
const SearchUser = ({ handleClick, placeholder, contactSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { loading, error, data } = useQuery(GET_CURRENT_USER);
    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const identifyUser = data.currentUser.id;
    return (
        <>
            <SearchModalInput
                placeholder={placeholder}
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                mb={3}
            />

            <>
                {searchTerm === '' ? (
                    <SearchGlobal
                        {...{
                            identifyUser,
                            handleClick,
                            contactSearch,
                        }}
                    />
                ) : (
                    <AvailableContacts
                        {...{
                            identifyUser,
                            handleClick,
                            searchTerm,
                            contactSearch,
                        }}
                    />
                )}
            </>
        </>
    );
};

export default SearchUser;
