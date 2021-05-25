import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';

import {
    ChatModalButton,
    ChatModalInput,
} from './messages-new-chat-modal.style';

import { useConversations } from '../../common/context/conversationContext';

import MessagesGlobalSearch from '../messages-global-search';
import MessagesAvaliableContacts from '../messages-avaliable-contacts';

const MessagesNewChatModal = ({ closeModal, identifyUser }) => {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body overflow="auto">
                <ChatModalInput
                    placeholder="Start conversation with ..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    mb={3}
                />

                <Form onSubmit={handleSubmit}>
                    {searchTerm === '' ? (
                        <MessagesGlobalSearch
                            {...{
                                identifyUser,
                                selectedContactIds,
                                handleCheckboxChange,
                            }}
                        />
                    ) : (
                        <MessagesAvaliableContacts
                            {...{
                                identifyUser,
                                selectedContactIds,
                                handleCheckboxChange,
                                searchTerm,
                            }}
                        />
                    )}

                    <ChatModalButton type="submit">Create</ChatModalButton>
                </Form>
            </Modal.Body>
        </>
    );
};

export default MessagesNewChatModal;
