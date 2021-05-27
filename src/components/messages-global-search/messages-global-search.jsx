import React from 'react';
import { Form } from 'react-bootstrap';
import MessagesContact from '../messages-contact';
import { useContactContext } from '../../common/context/contactContext';

import { MessagesGlobalSearchDiv } from './messages-global-search.style';
import {
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const MessagesGlobalSearch = ({
    identifyUser,
    selectedContactIds,
    handleCheckboxChange,
}) => {
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
                    .map((contact) => (
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
                                onChange={() =>
                                    handleCheckboxChange(+contact.id)
                                }
                                className="mt-2"
                            />
                        </Form.Group>
                    ))}
        </MessagesGlobalSearchDiv>
    );
};

export default MessagesGlobalSearch;
