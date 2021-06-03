import { Form } from 'react-bootstrap';
import MessagesContact from '../messages-contact';
import { useContactContext } from '../../common/context/contactContext';

import { MessagesGlobalSearchDiv } from './messages-global-search.style';
import {
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const MessagesGlobalSearch = ({ identifyUser, handleSubmit }) => {
    const availableContacts = useContactContext();
    return (
        <MessagesGlobalSearchDiv>
            <SearchContactsDiv>
                <SearchContactsTitle>Global Search</SearchContactsTitle>
            </SearchContactsDiv>

            {availableContacts &&
                availableContacts
                    .filter((user, index) =>
                        index < 5 && user.id !== identifyUser ? user : null
                    )
                    .map(contact => (
                        <MessagesContact
                            smallBlock
                            contactSearch
                            contactID={contact.id}
                            key={contact.id}
                            event={() => handleSubmit(contact.id)}
                        />
                    ))}
        </MessagesGlobalSearchDiv>
    );
};

export default MessagesGlobalSearch;
