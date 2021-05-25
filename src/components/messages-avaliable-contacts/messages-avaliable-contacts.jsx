import React from 'react';
import MessagesContact from '../messages-contact';
import { useContacts } from '../../common/context/contactsContext';

import { Form } from 'react-bootstrap';

import { MessagesAvailiableContactsDiv } from './messages-avaliable-contacts.style';
import {
    StyledText,
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const MessagesAvaliableContacts = ({
    identifyUser,
    selectedContactIds,
    handleCheckboxChange,
    searchTerm,
}) => {
    const avaliableContacts = useContacts();
    const contacts =
        avaliableContacts &&
        avaliableContacts.filter((user) =>
            (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.lastName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())) &&
            user.id !== identifyUser
                ? user
                : null
        );

    return (
        <MessagesAvailiableContactsDiv content="start">
            <SearchContactsDiv>
                <SearchContactsTitle>Search Result</SearchContactsTitle>
            </SearchContactsDiv>
            {contacts.length === 0 ? (
                <StyledText>We do not know this user...</StyledText>
            ) : (
                contacts.map((contact) => (
                    <Form.Group controlId={contact.id} key={contact.id}>
                        <Form.Check
                            type="checkbox"
                            value={selectedContactIds.includes(+contact.id)}
                            label={
                                <MessagesContact
                                    smallBlock
                                    contactSearch
                                    contactID={contact.id}
                                />
                            }
                            onChange={() => handleCheckboxChange(+contact.id)}
                        />
                    </Form.Group>
                ))
            )}
        </MessagesAvailiableContactsDiv>
    );
};

export default MessagesAvaliableContacts;
