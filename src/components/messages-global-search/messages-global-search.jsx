import React from 'react';
import { Form } from 'react-bootstrap';
import MessagesContact from '../messages-contact';
import { useContacts } from '../../common/context/contactsContext';

import {
    StyledDiv,
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const MessagesGlobalSearch = ({
    identifyUser,
    selectedContactIds,
    handleCheckboxChange,
}) => {
    const avaliableContacts = useContacts();
    return (
        <StyledDiv mt="10px">
            <SearchContactsDiv>
                <SearchContactsTitle>Global Search</SearchContactsTitle>
            </SearchContactsDiv>

            {avaliableContacts &&
                avaliableContacts
                    .filter((user, index) =>
                        index < 5 && user.id !== identifyUser ? user : null
                    )
                    .map((contact) => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(+contact.id)}
                                label={`${contact.firstName} ${contact.lastName}`}
                                onChange={() =>
                                    handleCheckboxChange(+contact.id)
                                }
                            />
                        </Form.Group>
                    ))}
        </StyledDiv>
    );
};

export default MessagesGlobalSearch;
