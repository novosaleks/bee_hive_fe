import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';

import { Input } from '../../common/style';
import { ChatModalButton } from './messages-new-chat-modal.style';

import { useConversations } from '../../common/context/conversationContext';
import { useContacts } from '../../common/context/ContactsProvider';

const MessagesNewChatModal = ({ closeModal, identifyUser }) => {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const avaliableContacts = useContacts();
    const { createConversation } = useConversations();

    const handleSubmit = (e) => {
        e.preventDefault();

        selectedContactIds.length !== 0 &&
            createConversation(selectedContactIds);
        closeModal();
    };

    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds((prevSelectedContactIds) => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter((prevId) => {
                    return contactId !== prevId;
                });
            } else {
                return [...prevSelectedContactIds, contactId];
            }
        });
    };

    const contacts = avaliableContacts.filter((user) =>
        (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        user.id !== identifyUser
            ? user
            : null
    );
    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body overflow="auto">
                <Input
                    placeholder="Start conversation with ..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    mb={3}
                />

                <Form onSubmit={handleSubmit}>
                    {avaliableContacts &&
                        searchTerm !== '' &&
                        contacts.map((contact) => (
                            <Form.Group controlId={contact.id} key={contact.id}>
                                <Form.Check
                                    type="checkbox"
                                    value={selectedContactIds.includes(
                                        +contact.id
                                    )}
                                    label={`${contact.firstName} ${contact.lastName}`}
                                    onChange={() =>
                                        handleCheckboxChange(+contact.id)
                                    }
                                />
                            </Form.Group>
                        ))}
                    <ChatModalButton type="submit">Create</ChatModalButton>
                </Form>
            </Modal.Body>
        </>
    );
};

export default MessagesNewChatModal;
