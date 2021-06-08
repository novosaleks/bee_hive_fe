import { useState } from 'react';
import { GET_CURRENT_USER } from '../../graphql/user';

import SearchGlobal from '../search-global';
import AvailableContacts from '../available-contacts';

import { SearchModalInput } from './search-users.style';
import useQueriedData from '../../common/hooks/useQueriedData';

const SearchUser = ({ handleClick, placeholder, contactSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { fallback, data } = useQueriedData(GET_CURRENT_USER);

    if (fallback) {
        return fallback;
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
