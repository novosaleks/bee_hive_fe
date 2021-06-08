import SearchContact from '../search-contact';
import { useContactContext } from '../../common/context/contactContext';

import { AvailiableContactsDiv } from './available-contacts.style';
import {
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const AvailableContacts = ({
    identifyUser,
    handleSubmit,
    searchTerm,
    contactSearch,
}) => {
    const users = useContactContext();
    const contacts = users?.filter(user =>
        (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        user.id !== identifyUser
            ? user
            : null
    );
    return (
        <AvailiableContactsDiv content='start'>
            <SearchContactsDiv>
                <SearchContactsTitle>Search Result</SearchContactsTitle>
            </SearchContactsDiv>
            {contacts?.length === 0 ? (
                <p>We do not know this user...</p>
            ) : (
                contacts.map(contact => (
                    <SearchContact
                        smallBlock
                        contactSearch={contactSearch}
                        contactID={contact.id}
                        key={contact.id}
                        event={() => handleSubmit(contact.id)}
                        users={users}
                    />
                ))
            )}
        </AvailiableContactsDiv>
    );
};

export default AvailableContacts;
