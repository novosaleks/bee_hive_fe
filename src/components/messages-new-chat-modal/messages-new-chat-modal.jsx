import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useConversations } from '../../common/context/conversationContext';
import { useContacts } from '../../common/context/ContactsProvider';

const MessagesNewChatModal = ({ closeModal }) => {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const avaliableContacts = useContacts();
    const { createConversation } = useConversations();

    function handleSubmit(e) {
        e.preventDefault();

        createConversation(selectedContactIds);
        closeModal();
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds((prevSelectedContactIds) => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter((prevId) => {
                    return contactId !== prevId;
                });
            } else {
                return [...prevSelectedContactIds, contactId];
            }
        });
    }

    return (
        <>
            <Modal.Header closeButton>Create Chat</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {avaliableContacts &&
                        avaliableContacts.map((contact) => (
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
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
};

export default MessagesNewChatModal;
