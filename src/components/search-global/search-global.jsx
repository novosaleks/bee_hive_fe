import SearchContact from '../search-contact';
import { useContactContext } from '../../common/context/contactContext';

import { GlobalSearchDiv } from './search-global.style';
import {
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const SearchGlobal = ({ identifyUser, handleClick, contactSearch }) => {
    const users = useContactContext();
    return (
        <GlobalSearchDiv>
            <SearchContactsDiv>
                <SearchContactsTitle>Global Search</SearchContactsTitle>
            </SearchContactsDiv>

            {users
                ?.filter((user, index) =>
                    index < 5 && user.id !== identifyUser ? user : null
                )
                .map(contact => (
                    <SearchContact
                        smallBlock
                        contactSearch={contactSearch}
                        contactID={contact.id}
                        key={contact.id}
                        event={() => handleClick(contact.id)}
                        users={users}
                    />
                ))}
        </GlobalSearchDiv>
    );
};

export default SearchGlobal;
