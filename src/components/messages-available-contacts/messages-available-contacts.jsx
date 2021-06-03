import MessagesContact from '../messages-contact';

import { MessagesAvailiableContactsDiv } from './messages-available-contacts.style';
import {
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const MessagesAvailableContacts = ({
    identifyUser,
    handleSubmit,
    searchTerm,
    users,
}) => {
    const contacts = users?.filter(user =>
        (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        user.id !== identifyUser
            ? user
            : null
    );

    return (
        <MessagesAvailiableContactsDiv content='start'>
            <SearchContactsDiv>
                <SearchContactsTitle>Search Result</SearchContactsTitle>
            </SearchContactsDiv>
            {contacts.length === 0 ? (
                <p>We do not know this user...</p>
            ) : (
                contacts.map(contact => (
                    <MessagesContact
                        smallBlock
                        contactSearch
                        contactID={contact.id}
                        key={contact.id}
                        event={() => handleSubmit(contact.id)}
                        users={users}
                    />
                ))
            )}
        </MessagesAvailiableContactsDiv>
    );
};

export default MessagesAvailableContacts;
